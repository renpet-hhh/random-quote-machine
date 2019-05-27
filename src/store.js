import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,
    applyMiddleware(thunk));

store.subscribe(() => {
    console.log("--------------");
    console.log("current state:");
    console.log(store.getState());
    console.log("--------------");
});

export default store;