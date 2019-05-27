import { getRandomColor } from "../functionsForReducers";
import { STARTED_FETCHING_QUOTE } from "../action-creators/startedFetchingQuote";
import { DID_FETCH_QUOTE } from "../action-creators/didFetchQuote";
import { FILTER_QUOTES } from "../action-creators/filterQuotes";


const fetchQuoteReducer = (state, action) => {
    console.log("FETCH_QUOTE_REDUCER VIEW OF STATE");
    console.log(state);
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
        
        case FILTER_QUOTES:
            console.log("FILTER_QUOTE");
            return Object.assign(copyState, {
                quoteFilter: action.filterOption
            })

        default:
            return copyState;
    }
}

export default fetchQuoteReducer;