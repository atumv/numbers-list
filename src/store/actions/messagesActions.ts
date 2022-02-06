import {
  SHOW_NUMBER_ADDED_MSG,
  HIDE_NUMBER_ADDED_MSG,
} from 'store/actionTypes';

export const showNumberAddedMsg = () => ({
  type: SHOW_NUMBER_ADDED_MSG,
});

export const hideNumberAddedMsg = () => ({
  type: HIDE_NUMBER_ADDED_MSG,
});
