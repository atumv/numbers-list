import { FETCH_NUMBERS, CLEAR_NUMBERS, ADD_NUMBER } from 'store/actionTypes';

const initialState = {
  numbers: [],
};

export const numbersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NUMBERS:
      return {
        ...state,
        numbers: action.payload,
      };
    case CLEAR_NUMBERS:
      return {
        ...state,
        numbers: [],
      };
    case ADD_NUMBER:
      return state;

    default:
      return state;
  }
};
