import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Tabs from '@/components/Tabs';
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

export default function Todo() {
  const [tabActive, setTabActive] = useState('1');
  const [open, setOpen] = useState(false);

  const handleAdd = (isOpen) => {
    setOpen(isOpen);
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
      {tabActive === '1' && <TodoList />}

      <AddTodo open={open} handleAdd={handleAdd} />
    </>
  );
}
