import React from 'react';
import { Navigate } from 'react-router-dom';
import Todo from '../pages/Todo';
import Calendar from '../pages/Calendar';
import Task from '../pages/Task';
import Genetal from '@/pages/General';

export default [
  {
    path: '/general',
    element: <Navigate to="/general/todo" />,
  },
  {
    path: '/general',
    element: <Genetal />,
    children: [
      {
        path: 'todo',
        element: <Todo />,
        meta: {
          title: 'Todo',
          icon: require('../images/img_todo.png'),
          hidden: false,
          forbidden: false,
          hasDetail: true,
        },
      },
      {
        path: 'calendar',
        element: <Calendar />,
        meta: {
          title: 'Calendar',
          icon: require('../images/img_calendar.png'),
          hidden: false,
        },
      },
      {
        path: 'task',
        element: <Task />,
        meta: {
          title: 'Task',
          icon: require('../images/img_task.png'),
          hidden: false,
          forbidden: true,
        },
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/general/todo" />,
  },
];
