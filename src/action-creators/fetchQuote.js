import { didFetchQuote } from "./didFetchQuote";
import { startedFetchingQuote } from "./startedFetchingQuote";



const fetchQuote = () => (dispatch, getState) => {
    if (getState().isFetchingQuote) {
        console.log("already fetching!!!");
        return Promise.reject("Already fetching");
    }
    console.log("started fetching...");
    dispatch(startedFetchingQuote());
    return fetch("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", {cache: 'no-cache'}
    ).then(response => response.json()
    ).then(data => dispatch(
        didFetchQuote(/(?<=<p>).+(?=<[/]p>)/.exec(data[0].content) 
        // removing <p> and </p> from content, content has HTML code, like &lt;
    , data[0].title)));
};

export default fetchQuote;