import { IoTrashBinOutline } from 'react-icons/io5';

interface TodoListProps {
  todos: TodoItem[];
  handleCompleted: (todo: TodoItem) => Promise<void>;
  handleDeleted: (id: TodoItem['id']) => Promise<void>;
  deleting: boolean;
}
const TodoList = ({ todos, handleDeleted, deleting, handleCompleted }: TodoListProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {todos.map((todo) => {
        return (
          <article
            key={`${todo.id}`}
            className="flex w-full items-center justify-between rounded-xl bg-gradient-to-b
            from-slate-100 to-white p-2 hover:cursor-pointer hover:opacity-70"
          >
            <div className="flex-start flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                name="checkbox-todo"
                className="min-h-6 min-w-6 appearance-auto hover:cursor-pointer"
                id={`${todo.id}`}
                onChange={() => void handleCompleted({ ...todo, completed: !todo.completed })}
                disabled={deleting}
              />
              <label
                htmlFor={`${todo.id}`}
                className={`capitalize ${todo.completed ? 'line-through' : 'none'}`}
              >
                {todo.content}
              </label>
            </div>
            <button
              type="button"
              className="p-2"
              onClick={() => void handleDeleted(todo.id)}
              disabled={deleting}
            >
              <IoTrashBinOutline className="min-h-6 min-w-6 text-red-500" />
            </button>
          </article>
        );
      })}
    </div>
  );
};
export default TodoList;
