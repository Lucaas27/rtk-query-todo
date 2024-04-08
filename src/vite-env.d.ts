/// <reference types="vite/client" />

interface TodoItem {
  id?: string | number;
  userId?: string | number;
  content: string;
  completed: boolean;
}

interface GetTodosApiResponse {
  todos: TodoItem[];
  total: number;
  skip: number;
  limit: number;
}
interface DeleteItemApiResponse extends TodoItem {
  isDeleted: boolean;
  deletedOn: string;
}
