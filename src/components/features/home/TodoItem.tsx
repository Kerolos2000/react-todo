import CancelIcon from '@mui/icons-material/CloseOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { EllipsisTypography } from 'mui-plus-components';
import { useCallback, useState } from 'react';
import { Todo } from 'src/types';

export interface TodoItemProps {
	onDelete: (id: number) => void;
	onUpdate: (todo: Todo) => void;
	todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({
	onDelete,
	onUpdate,
	todo,
}) => {
	const [editing, setEditing] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const [completed, setCompleted] = useState(!!todo.completed);

	const startEdit = useCallback(() => {
		setEditing(true);
		setTitle(todo.title);
		setCompleted(!!todo.completed);
	}, [todo]);

	const cancelEdit = useCallback(() => {
		setEditing(false);
		setTitle(todo.title);
		setCompleted(!!todo.completed);
	}, [todo]);

	const saveEdit = useCallback(() => {
		onUpdate({ ...todo, completed, title: title.trim() });
		setEditing(false);
	}, [onUpdate, todo, title, completed]);

	const toggleCompleted = (checked: boolean) => {
		setCompleted(checked);
		if (!editing) onUpdate({ ...todo, completed: checked });
	};

	return (
		<ListItem
			sx={{
				alignItems: 'center',
				display: 'flex',
				gap: 1,
				justifyContent: 'space-between',
				width: '100%',
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flex: 1,
					gap: 1,
					minWidth: 0,
				}}
			>
				<Checkbox
					checked={completed}
					onChange={e => toggleCompleted(e.target.checked)}
				/>
				{editing ? (
					<TextField
						fullWidth
						onChange={e => setTitle(e.target.value)}
						size='small'
						value={title}
					/>
				) : (
					<EllipsisTypography
						lines={2}
						sx={{
							flex: 1,
							minWidth: 0,
							textDecoration: completed ? 'line-through' : 'none',
							wordBreak: 'break-word',
						}}
						tooltip={title}
						tooltipPlacement='top'
					>
						{title}
					</EllipsisTypography>
				)}
			</Box>

			<Box sx={{ display: 'flex', flexShrink: 0, gap: 1 }}>
				{editing ? (
					<>
						<IconButton
							aria-label='save'
							onClick={saveEdit}
							size='small'
						>
							<SaveIcon />
						</IconButton>
						<IconButton
							aria-label='cancel'
							onClick={cancelEdit}
							size='small'
						>
							<CancelIcon />
						</IconButton>
					</>
				) : (
					<>
						<IconButton
							aria-label='edit'
							onClick={startEdit}
							size='small'
						>
							<EditIcon />
						</IconButton>
						<IconButton
							aria-label='delete'
							color='error'
							onClick={() => onDelete(todo.id)}
							size='small'
						>
							<DeleteIcon />
						</IconButton>
					</>
				)}
			</Box>
		</ListItem>
	);
};
