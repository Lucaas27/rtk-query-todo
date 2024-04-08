import { FormEvent } from 'react';
import { GrSend } from 'react-icons/gr';

interface TodoFormProps {
  handleAddTodo: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  newTodoInput: string;
  setNewTodoInput: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Renders a form for adding a new todo item.
 *
 * @param {function} handleAddTodo - Function to handle adding a new todo item
 * @param {boolean} loading - Flag indicating if the form is currently in a loading state
 * @param {function} setNewTodoInput - Function to set the new todo input value
 * @param {string} newTodoInput - The value of the new todo input
 * @return {JSX.Element} The form JSX element for adding a new todo item
 */
const TodoForm = ({ handleAddTodo, loading, setNewTodoInput, newTodoInput }: TodoFormProps) => {
  return (
    <form
      onSubmit={(e) => void handleAddTodo(e)}
      className="flex w-full flex-col items-start justify-center"
    >
      <div className="mx-auto flex w-full flex-row justify-center">
        <label htmlFor="new-todo" className="sr-only px-2 text-lg leading-loose text-gray-500 ">
          Enter todo:
        </label>
        <input
          id="new-todo"
          type="text"
          value={newTodoInput}
          onChange={(e) => setNewTodoInput(e.target.value)}
          placeholder="Enter new todo item"
          className="w-1/2 rounded-s-3xl border p-2 outline-transparent"
        />
        <button
          disabled={loading}
          type="submit"
          className="rounded-e-3xl border bg-cyan-500 px-3 py-2 text-slate-50
          hover:opacity-75 disabled:bg-gray-200 disabled:text-slate-300 "
        >
          <GrSend className="mx-auto" />
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
