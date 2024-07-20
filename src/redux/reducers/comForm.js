/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { TOGGLE } from '../constant';

const showFormId = '';
export function comFormReducer(preState = showFormId, action) {
  const { type, data } = action;
  switch (type) {
    case TOGGLE:
      preState = preState === data ? '' : data;
      return preState;
    default:
      return preState;
  }
}
