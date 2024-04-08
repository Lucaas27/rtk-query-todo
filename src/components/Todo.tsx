import { FormEvent, useState } from 'react';
import useToast from '../hooks/useToast';
// import { isErrorWithMessage, isFetchBaseQueryError } from '../store/hooks';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import SpinnerLoader from './SpinnerLoader';
import Pagination from './Pagination';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../services/todoApiSlice';
import usePagination from '../hooks/usePagination';

const Todo = () => {
  // Toast
  const { showToast } = useToast();
  const { data: allTodos, isLoading, isSuccess: successfulGet } = useGetTodosQuery();
  const [addTodo, { isLoading: adding }] = useAddTodoMutation();
  const [deleteTodo, { isLoading: deleting }] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [newTodoInput, setNewTodoInput] = useState<TodoItem['content']>('');

  Pagination;
  const {
    changePageSize,
    currentPage,
    firstPage,
    goToPage,
    lastPage,
    nextPage,
    pageSize,
    prevPage,
    totalPages,
    generatePaginatedItems,
  } = usePagination(allTodos ?? [], 6);

  const paginatedTodos = generatePaginatedItems();

  /**
   * Handles the addition of a new todo item.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form event triggering the addition
   * @return {Promise<void>} A promise representing the completion of the addition process
   */
  const handleAddTodo = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (!newTodoInput) {
        throw new Error('Invalid todo content');
      }

      const todo = { content: newTodoInput, completed: false };
      await addTodo(todo).unwrap();
      setNewTodoInput('');
      showToast('Todo added successfully', 'success');
    } catch (err) {
      showToast('Error adding todo', 'error');
      console.error('Error adding todo', err);
    }
  };

  /**
   * Handles the deletion of a todo item.
   *
   * @param {TodoItem['id']} id - The ID of the todo item to be deleted
   * @return {Promise<void>} A promise that resolves when the deletion is successful
   */
  const handleDeleteTodo = async (id: TodoItem['id']): Promise<void> => {
    try {
      await deleteTodo(id).unwrap();
      showToast(`Deleted todo`, 'success');
    } catch (err) {
      showToast('Error deleting todo', 'error');
      console.error('Error deleting todo', err);
    }
  };

  /**
   * A function that handles the completion of a todo item.
   *
   * @param {TodoItem} todo - The todo item to be completed
   * @return {Promise<void>} A promise that resolves when the todo is updated
   */
  const handleCompleted = async (todo: TodoItem): Promise<void> => {
    try {
      await updateTodo(todo).unwrap();
      showToast(`Updated todo`, 'success');
    } catch (err) {
      showToast('Error updating todo', 'error');
      console.error('Error updating todo', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between [&>*]:mt-8">
      <h1 className="text-5xl font-bold capitalize">Todo List</h1>
      <TodoForm
        handleAddTodo={handleAddTodo}
        loading={adding}
        newTodoInput={newTodoInput}
        setNewTodoInput={setNewTodoInput}
      />
      {isLoading ? (
        <SpinnerLoader />
      ) : successfulGet ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <TodoList
            todos={paginatedTodos}
            handleDeleted={handleDeleteTodo}
            handleCompleted={handleCompleted}
            deleting={deleting}
          />
        </div>
      ) : (
        <p className="text-xl font-semibold text-red-500">Something went wrong !!</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        nextPage={nextPage}
        prevPage={prevPage}
        firstPage={firstPage}
        lastPage={lastPage}
        changePageSize={changePageSize}
        goToPage={goToPage}
      />
    </div>
  );
};

export default Todo;
