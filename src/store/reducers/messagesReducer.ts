import {
  SHOW_NUMBER_ADDED_MSG,
  HIDE_NUMBER_ADDED_MSG,
  ADD_NUMBER,
} from 'store/actionTypes';

interface MessagesState {
  numberAdded: boolean;
}

const initialState: MessagesState = {
  numberAdded: false,
};

export const messagesReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case SHOW_NUMBER_ADDED_MSG:
      return {
        ...state,
        numberAdded: true,
      };
    case HIDE_NUMBER_ADDED_MSG:
      return {
        ...state,
        numberAdded: false,
      };
    case ADD_NUMBER:
      return {
        ...state,
        numberAdded: true,
      };

    default:
      return state;
  }
};
