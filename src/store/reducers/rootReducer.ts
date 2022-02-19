import { combineReducers } from 'redux';
import { errorsReducer } from 'store/reducers/errorsReducer';
import { numbersReducer } from 'store/reducers/numbersReducer';
import { messagesReducer } from 'store/reducers/messagesReducer';

export const rootReducer = combineReducers({
  errors: errorsReducer,
  numbers: numbersReducer,
  messages: messagesReducer,
});
