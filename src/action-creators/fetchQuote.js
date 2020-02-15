import { didFetchQuote } from "./didFetchQuote";
import { startedFetchingQuote } from "./startedFetchingQuote";

const quotesFromFCC = fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
).then(response => response.json()
);



// dispatch(fetchQuote()) dispatches a function with arguments (dispatch, getState) provided by the middleware,
// that enables updating the store asyncronously
const fetchQuote = () => async (dispatch, getState) => {

    if (getState().isFetchingQuote) {
        console.log("already fetching!!!");
        return Promise.reject("Already fetching");
    }
    console.log("started fetching...");
    dispatch(startedFetchingQuote());
    let allTags = ["Simpsons", "design", "default"]
    let filterFromState = getState().fetch.quoteFilter;
    let quoteFilter = filterFromState === 'all' ?
        allTags[Math.floor(Math.random() * allTags.length)] : filterFromState;
    console.log(filterFromState);
    console.log(quoteFilter);
    switch (quoteFilter) {
        case 'Simpsons':
            fetch("https://thesimpsonsquoteapi.glitch.me/quotes"
            ).then(response => response.json()
            ).then(data => dispatch(
                didFetchQuote(data[0].quote, data[0].character)));
            break;
        case 'design':
            const designQuotes = await fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", { cache: 'no-store' }
            ).then(response => response.json()
            ); // the API isn't sending random responses...
            const quote = designQuotes[Math.floor(Math.random() * designQuotes.length)];
            dispatch(
                didFetchQuote(/(?<=<p>).+(?=<[/]p>)/.exec(quote.content.rendered)
                    // removing <p> and </p> from content, content has HTML code, like &lt;
                    , quote.title.rendered))
            break;
        default:
            const quotesArr = (await quotesFromFCC).quotes;
            const quoteObj = quotesArr[Math.floor(Math.random() * quotesArr.length)];
            dispatch(didFetchQuote(quoteObj.quote, quoteObj.author));
    }

};

export default fetchQuote;