import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Tabs from '@/components/Tabs';
import TodoList from '@/components/TodoList';
import TodoItem from '@/components/TodoItem';
import { getTodos } from '@/api/data';
import AddTodo from '@/components/AddTodo';

export default function Todo() {
  const [todos, setTodos] = useState(getTodos);
  const [tabActive, setTabActive] = useState('1');
  const [open, setOpen] = useState(false);

  const handleAdd = (isOpen) => {
    setOpen(isOpen);
  };

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
            onClick={() => handleAdd(true)}
          >
            New Todo
          </Button>
        </div>
      </div>
      {tabActive === '1' && (
        <TodoList>
          {todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onChangeComplete={onChangeComplete(t)}
            />
          ))}
        </TodoList>
      )}

      <AddTodo open={open} handleAdd={handleAdd} />
    </>
  );
}
