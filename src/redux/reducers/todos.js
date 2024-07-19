/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { SELECT_TODO } from '../constant';

const selectItem = null;
export function todosReducer(preState = selectItem, action) {
  const { type, data } = action;
  switch (type) {
    case SELECT_TODO:
      preState = data;
      return preState;
    default:
      return preState;
  }
}
