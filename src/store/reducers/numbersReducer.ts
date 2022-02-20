import { FETCH_NUMBERS, CLEAR_NUMBERS, ADD_NUMBER } from 'store/actionTypes';
import { INumber } from 'shared/interfaces';

interface NumbersState {
  numbers: INumber[];
}

interface NumbersAction {
  type: string;
  payload: INumber[];
}

const initialState: NumbersState = {
  numbers: [],
};

export const numbersReducer = (state = initialState, action: NumbersAction) => {
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
