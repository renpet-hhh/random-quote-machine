import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'
import { getRandomColor } from "./functionsForReducers";


const initialState = {

    fetch: {
    mainColor: getRandomColor(),
    isFetchingQuote: false, quoteTextOpacity: 1, // quoteTextOpacity indicates if QuoteBox must fade out/in
    quoteText: "", quoteAuthor: "",
    quoteFilter: "all"}

};

const store = createStore(rootReducer, initialState,
    applyMiddleware(thunk));


store.subscribe(() => {
    console.log("--------------");
    console.log("current state:");
    console.log(store.getState());
    console.log("--------------");
});

export default store;