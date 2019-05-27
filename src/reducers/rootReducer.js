import { getRandomColor } from "../functionsForReducers";
import { STARTED_FETCHING_QUOTE } from "../action-creators/startedFetchingQuote";
import { DID_FETCH_QUOTE } from "../action-creators/didFetchQuote";

// fetch from "http://quotes.rest/qod.json"
// quoteText = data.contents.quotes[0].quote; 
// quoteAuthor = data.contents.quotes[0].author;

const initialState = {
    mainColor: getRandomColor(),
    isFetchingQuote: false, quoteTextOpacity: 1, // quoteTextOpacity indicates if QuoteBox must fade out/in
    quoteText: "", quoteAuthor: ""}

export default (state = initialState, action) => {
    let copyState = Object.assign({}, state);
    switch (action.type) {
        case STARTED_FETCHING_QUOTE:
            console.log("STARTED_FETCHING_QUOTE");
            if (state.isFetchingQuote) {
                console.log("ALREADY_FETCHING");
                return state;
            }
            return Object.assign(copyState, 
                {isFetchingQuote: true, mainColor: getRandomColor(),
                quoteTextOpacity: 0});

        
        case DID_FETCH_QUOTE:
            console.log("DID_FETCH_QUOTE");
            return Object.assign(copyState, 
                {isFetchingQuote: false, quoteTextOpacity: 1,
                quoteText: action.text, quoteAuthor: action.author});

        default:
            return state;
    }
}
