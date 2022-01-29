import { combineReducers } from 'redux';
import { errorsReducer } from './errorsReducer';
import { numbersReducer } from './numbersReducer';
import { messagesReducer } from './messagesReducer';

export const rootReducer = combineReducers({
  errors: errorsReducer,
  fetchedNumbers: numbersReducer,
  messages: messagesReducer,
});
