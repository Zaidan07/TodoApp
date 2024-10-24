import React from 'react';

type Todo = {
  text: string;
  completed: boolean;
  dueDate: 'today' | 'thisWeek' | 'thisMonth';
};

interface TodoItemProps {
  todo: Todo;
  onComplete: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete }) => {
  return (
    <div
      className={`p-2 mb-2 flex justify-between items-center rounded-md ${
        todo.completed ? 'bg-red-200' : 'bg-blue-200'
      }`}
    >
      <span className={`${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
      <div>
        <button onClick={onComplete} className="mr-2">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
