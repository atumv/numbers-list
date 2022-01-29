import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
