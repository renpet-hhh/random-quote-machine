import { combineReducers } from 'redux';
import fetchQuoteReducer from "./fetchQuoteReducer";



const rootReducer = combineReducers({fetch: fetchQuoteReducer});
export default rootReducer;