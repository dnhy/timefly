import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import Tabs from '@/components/Tabs';
import TodoList from '@/components/TodoList';
import TodoItem from '@/components/TodoItem';

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      name: 'Code Review',
      complete: false,
      describtion: '1212',
      taskid: nanoid(),
      progressid: nanoid(), // 可有可无
      tag: ['1', '2'], // 多个tag的id
      attachs: [
        {
          attachguid: '',
          downloadurl: '',
          title: '',
          uploadtime: '2022/12/32 9:00:00',
        },
      ],
      comments: [],
      createdate: '2024/8/20',
    },
    {
      id: nanoid(),
      name: 'Pull Request',
      complete: true,
    },
  ]);

  const onChangeComplete = (t) => (e) => {
    e.stopPropagation();
    setTodos(
      todos.map((todo) => {
        if (todo.id === t.id) {
          return { ...todo, complete: e.target.checked };
        } else {
          return todo;
        }
      }),
    );
  };

  const [tabActive, setTabActive] = useState('1');

  return (
    <>
      <div className="w-[calc(100% - 3rem)] mx-6  mt-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex-1">
            <div className="w-[90%] text-2xl text-text-color">
              Today,22 April
            </div>
            <Tabs
              items={[
                { label: 'List', key: '1' },
                { label: 'TimeLine', key: '2' },
                { label: 'Calendar', key: '3' },
              ]}
              active={tabActive}
              onChangeTab={(item) => {
                setTabActive(item.key);
              }}
            />
          </div>

          <Button
            type="primary"
            size="middle"
            icon={<PlusCircleOutlined />}
            className="rounded-xl px-4 py-5 bg-main-theme"
          >
            New Task
          </Button>
        </div>
      </div>
      {tabActive === '1' && (
        <TodoList>
          {todos.map((t) => (
            <TodoItem
              key={t.id}
              {...t}
              onChangeComplete={onChangeComplete(t)}
            />
          ))}
        </TodoList>
      )}
    </>
  );
}
