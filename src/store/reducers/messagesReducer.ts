import {
  SHOW_NEW_NUMBER_ADDED_MSG,
  HIDE_NEW_NUMBER_ADDED_MSG,
} from '../actionTypes';

const initialState = {
  newNumberAdded: false,
};

export const messagesReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case SHOW_NEW_NUMBER_ADDED_MSG:
      return {
        ...state,
        newNumberAdded: true,
      };
    case HIDE_NEW_NUMBER_ADDED_MSG:
      return {
        ...state,
        newNumberAdded: false,
      };

    default:
      return state;
  }
};
