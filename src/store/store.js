import { createStore } from 'redux';
import { rootReducer } from '../reducers/index.js';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

const allStoreEnhancer = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
	rootReducer,
	allStoreEnhancer
);

export default store;