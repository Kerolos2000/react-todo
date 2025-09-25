import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Form } from 'mui-plus-components';
import { useForm } from 'react-hook-form';
import { TodoSchema, todoSchema } from 'src/validation';

export interface TodoFormProps {
	onAdd: (data: TodoSchema) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
	const { palette } = useTheme();
	const {
		formState: { errors },
		handleSubmit,
		register,
		reset,
	} = useForm<TodoSchema>({
		defaultValues: { title: '' },
		resolver: zodResolver(todoSchema),
	});

	const submitHandler = (data: TodoSchema) => {
		onAdd(data);
		reset();
	};

	return (
		<Box sx={{ border: `1px solid ${palette.divider}`, p: 2 }}>
			<Form onSubmit={handleSubmit(submitHandler)}>
				<TextField
					label='Title'
					{...register('title')}
					error={!!errors.title}
					fullWidth
					helperText={errors.title?.message}
				/>
				<Button
					type='submit'
					variant='contained'
				>
					Add
				</Button>
			</Form>
		</Box>
	);
};
