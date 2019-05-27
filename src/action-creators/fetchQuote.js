import { didFetchQuote } from "./didFetchQuote";
import { startedFetchingQuote } from "./startedFetchingQuote";



const fetchQuote = () => (dispatch, getState) => {
    if (getState().isFetchingQuote) {
        console.log("already fetching!!!");
        return Promise.reject("Already fetching");
    }
    console.log("started fetching...");
    dispatch(startedFetchingQuote());
    let allTags = ["Simpsons", "design"]
    let filterFromState = getState().fetch.quoteFilter;
    let quoteFilter = filterFromState === 'all' ? 
        allTags[Math.floor(Math.random()*allTags.length)] : filterFromState;
    console.log(filterFromState);
    console.log(quoteFilter);
    switch (quoteFilter) {
        case 'Simpsons':
            return fetch("https://thesimpsonsquoteapi.glitch.me/quotes"
            ).then(response => response.json()
            ).then(data => dispatch(
                didFetchQuote(data[0].quote, data[0].character)));                

        case 'design':
            return fetch("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", { cache: 'no-cache' }
            ).then(response => response.json()
            ).then(data => dispatch(
                didFetchQuote(/(?<=<p>).+(?=<[/]p>)/.exec(data[0].content)
                    // removing <p> and </p> from content, content has HTML code, like &lt;
                    , data[0].title)));
        
        default:
            didFetchQuote("You are bugging the quote machine :(", "A sad dev");
    }
    
};

export default fetchQuote;