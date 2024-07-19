import { combineReducers } from 'redux';

import { todosReducer } from '@/redux/reducers/todos';

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({ todosReducer });

export default allReducer;
