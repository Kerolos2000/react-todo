import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface TodoListSkeletonProps {}

export const TodoListSkeleton: React.FC<TodoListSkeletonProps> = () => {
	return (
		<Paper sx={{ p: 3 }}>
			<Typography
				sx={{ textAlign: 'center' }}
				variant='h3'
			>
				Todo List
			</Typography>
			<Skeleton
				height={56}
				sx={{ borderRadius: 1, mt: 2 }}
				variant='rectangular'
			/>
			<List sx={{ mt: 2 }}>
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton
						height={48}
						key={i}
						sx={{ borderRadius: 1, mb: 1 }}
						variant='rectangular'
					/>
				))}
			</List>
		</Paper>
	);
};
