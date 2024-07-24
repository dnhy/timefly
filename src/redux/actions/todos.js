import { SELECT_TODO, LIKE_COMMENT } from '../constant';

// eslint-disable-next-line import/prefer-default-export
export const selectTodo = (data) => ({ type: SELECT_TODO, data });
export const likeComment = (data) => ({ type: LIKE_COMMENT, data });
