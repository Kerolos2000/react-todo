import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Todo } from 'src/types';
import { TodoSchema } from 'src/validation';

import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

export interface TodoListProps {
	onAdd: (data: TodoSchema) => void;
	onDelete: (id: number) => void;
	onUpdate: (todo: Todo) => void;
	todos?: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({
	onAdd,
	onDelete,
	onUpdate,
	todos = [],
}) => {
	return (
		<Paper>
			<Typography
				sx={{ mb: 2, textAlign: 'center' }}
				variant='h3'
			>
				Todo List
			</Typography>
			<TodoForm onAdd={onAdd} />
			<List sx={{ mt: 2 }}>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						onDelete={onDelete}
						onUpdate={onUpdate}
						todo={todo}
					/>
				))}
			</List>
		</Paper>
	);
};
