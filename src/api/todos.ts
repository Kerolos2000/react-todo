import { useAxios } from 'src/hooks';
import { Todo } from 'src/types';

const { delete: deleteReq, get, post, put } = useAxios();

export const getTodos = async (): Promise<Todo[]> => {
	const { data } = await get('/todos?_limit=10');
	return data;
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
	const { data } = await post('/todos', todo);
	return data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
	const { data } = await put(`/todos/${todo.id}`, todo);
	return data;
};

export const deleteTodo = async (id: number): Promise<number> => {
	await deleteReq(`/todos/${id}`);
	return id;
};
