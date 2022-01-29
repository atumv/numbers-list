import {
  FETCH_NUMBERS,
  CLEAR_FETCHED_NUMBERS,
  ADD_NUMBER,
} from '../actionTypes';

const initialState = {
  fetchedNumbers: [],
};

export const numbersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NUMBERS:
      return {
        ...state,
        fetchedNumbers: action.payload,
      };
    case CLEAR_FETCHED_NUMBERS:
      return {
        ...state,
        fetchedNumbers: [],
      };
    case ADD_NUMBER:
      return state;

    default:
      return state;
  }
};
