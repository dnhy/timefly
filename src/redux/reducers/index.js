import { combineReducers } from 'redux';

import { todosReducer } from '@/redux/reducers/todos';
import { comFormReducer } from '@/redux/reducers/comForm';

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({ todosReducer, comFormReducer });

export default allReducer;
