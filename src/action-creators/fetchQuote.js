import { didFetchQuote } from "./didFetchQuote";
import { startedFetchingQuote } from "./startedFetchingQuote";
import { filterQuotes } from "./filterQuotes";

let quotesFromFCC = [];
fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
).then(response => response.json()
).then(data => {
    quotesFromFCC = data;
});




const fetchQuote = () => (dispatch, getState) => {
    if (getState().isFetchingQuote) {
        console.log("already fetching!!!");
        return Promise.reject("Already fetching");
    }
    console.log("started fetching...");
    dispatch(startedFetchingQuote());
    let allTags = ["Simpsons", "design", "default"]
    let filterFromState = getState().fetch.quoteFilter;
    let quoteFilter = filterFromState === 'all' ? 
        allTags[Math.floor(Math.random()*allTags.length)] : filterFromState;
    console.log(filterFromState);
    console.log(quoteFilter);
    switch (quoteFilter) {
        case 'Simpsons':
            return fetch("https://thesimpsonsquoteapi.glitch.me/quotes"
            ).then(response => response.json(), () => { 
                dispatch(filterQuotes('all'));
                dispatch(fetchQuote());
                console.log("CATCHED FETCH ERROR IN SIMPSONS");
                return Promise.reject();
            }
            ).then(data => dispatch(
                didFetchQuote(data[0].quote, data[0].character)));

        case 'design':
            return fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", { cache: 'no-cache' }
            ).then(response => response.json(), () => {
                dispatch(filterQuotes('all'));
                dispatch(fetchQuote());
                console.log("CATCHED FETCH ERROR IN DESIGN");
                return Promise.reject();
            }
            ).then(data => dispatch(
                didFetchQuote(/(?<=<p>).+(?=<[/]p>)/.exec(data[0].content)
                    // removing <p> and </p> from content, content has HTML code, like &lt;
                    , data[0].title)));

        default:
            if (!quotesFromFCC.quotes) fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
            ).then(response => response.json()
            ).then(data => {
                quotesFromFCC = data;
                let randomIndex = Math.floor(Math.random() * quotesFromFCC.quotes.length)
                setTimeout(() => {
                    dispatch(didFetchQuote(quotesFromFCC.quotes[randomIndex].quote,
                        quotesFromFCC.quotes[randomIndex].author));
                }, 400);
            });
            else {
                let randomIndex = Math.floor(Math.random() * quotesFromFCC.quotes.length)
                setTimeout(() => {
                    dispatch(didFetchQuote(quotesFromFCC.quotes[randomIndex].quote,
                        quotesFromFCC.quotes[randomIndex].author));
                }, 400); // aesthetic delay
            }
            

    }
    
};

export default fetchQuote;