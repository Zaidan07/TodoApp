import React from 'react';
import TodoItem from './TodoItems'; // Mengimpor komponen TodoItem

type Todo = {
  text: string;
  completed: boolean;
  dueDate: 'today' | 'thisWeek' | 'thisMonth';
};

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  dueDate: 'today' | 'thisWeek' | 'thisMonth';
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, dueDate }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">
        {dueDate === 'today' ? "Today's Tasks" : dueDate === 'thisWeek' ? "This Week's Tasks" : "This Month's Tasks"}
      </h2>
      {todos
        .filter(todo => todo.dueDate === dueDate)
        .map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onComplete={() => toggleComplete(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
    </div>
  );
};

export default TodoList;
