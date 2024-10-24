'use client';
import React, { useState } from 'react';
import TodoList from './TodoList'; // Mengimpor TodoList

type Todo = {
  text: string;
  completed: boolean;
  dueDate: 'today' | 'thisWeek' | 'thisMonth';
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');
  const [selectedDueDate, setSelectedDueDate] = useState<Todo['dueDate']>('today');

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { text: todo, completed: false, dueDate: selectedDueDate }]);
      setTodo('');
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border border-gray-300 mb-2 w-full"
      />

      <select
        className="p-2 border border-gray-300 mb-2"
        value={selectedDueDate}
        onChange={(e) => setSelectedDueDate(e.target.value as Todo['dueDate'])}
      >
        <option value="today">Today</option>
        <option value="thisWeek">This Week</option>
        <option value="thisMonth">This Month</option>
      </select>

      <button
        onClick={addTodo}
        className="p-2 bg-blue-500 text-white rounded-md w-full mb-4"
      >
        Add Todo
      </button>

      {/* Menggunakan TodoList untuk menampilkan todo berdasarkan kategori */}
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} dueDate="today" />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} dueDate="thisWeek" />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} dueDate="thisMonth" />
    </div>
  );
};

export default TodoApp;
