import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Page, Section } from 'mui-plus-components';
import { addTodo, deleteTodo, getTodos, updateTodo } from 'src/api/todos';
import { ErrorFallback, TodoList, TodoListSkeleton } from 'src/components';
import { useNotify } from 'src/hooks/useNotify';
import { Todo } from 'src/types';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const queryClient = useQueryClient();
	const { notify } = useNotify();

	const {
		data: todos,
		isError,
		isLoading,
	} = useQuery({
		queryFn: getTodos,
		queryKey: ['todos'],
	});

	const { mutate: addTodoMutate } = useMutation({
		mutationFn: (data: Omit<Todo, 'id'>) => addTodo(data),
		onError: () => notify('Failed to add todo', { type: 'error' }),
		onSuccess: todo => {
			queryClient.setQueryData<Todo[]>(['todos'], old =>
				old ? [...old, todo] : [todo],
			);
			notify('Todo added!', { type: 'success' });
		},
	});

	const { mutate: updateTodoMutate } = useMutation({
		mutationFn: updateTodo,
		onError: () => notify('Failed to update todo', { type: 'error' }),
		onSuccess: todo => {
			queryClient.setQueryData<Todo[]>(['todos'], old =>
				old ? old.map(t => (t.id === todo.id ? todo : t)) : [],
			);
			notify('Todo updated!', { type: 'success' });
		},
	});

	const { mutate: deleteTodoMutate } = useMutation({
		mutationFn: deleteTodo,
		onError: () => notify('Failed to delete todo', { type: 'error' }),
		onSuccess: (_, id) => {
			queryClient.setQueryData<Todo[]>(['todos'], old =>
				old ? old.filter(t => t.id !== id) : [],
			);
			notify('Todo deleted!', { type: 'success' });
		},
	});

	if (isError) return <ErrorFallback />;

	return (
		<Page title='Home'>
			{isLoading ? (
				<TodoListSkeleton />
			) : (
				<Section sectionID='home-todo'>
					<TodoList
						onAdd={data => addTodoMutate(data)}
						onDelete={id => deleteTodoMutate(id)}
						onUpdate={todo => updateTodoMutate(todo)}
						todos={todos}
					/>
				</Section>
			)}
		</Page>
	);
};
