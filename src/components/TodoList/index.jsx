import React, { useEffect, useState } from 'react';
// import fetch from 'cross-fetch';
import { API_URL } from '@/constants/env';
import TodoItem from '@/components/TodoItem';
import { getTodos } from '@/api/data';

export default function TodoList() {
  const [todos, setTodos] = useState(getTodos);

  useEffect(() => {
    let isCanceled = false;

    async function fetchTodos() {
      if (isCanceled) return;
      const response = await fetch(`${API_URL}/todo/getAllTodos`);
      const json = await response.json();
      const { ok, data } = json;
      if (ok) {
        setTodos(data);
        console.log('data :', data);
      }
    }

    fetchTodos();

    return () => {
      isCanceled = true;
    };
  }, []);

  const onChangeComplete = (t) => (e) => {
    e.stopPropagation();
    setTodos(
      todos.map((todo) => {
        if (todo._id === t._id) {
          return { ...todo, complete: e.target.checked };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="mt-4">
      {todos.map((t) => (
        <TodoItem key={t._id} todo={t} onChangeComplete={onChangeComplete(t)} />
      ))}
    </div>
  );
}
