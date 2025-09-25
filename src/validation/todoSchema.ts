import { z } from 'zod';

export const todoSchema = z.object({
	completed: z.boolean().optional(),
	title: z.string().min(1, 'Title is required').max(200),
});

export type TodoSchema = z.infer<typeof todoSchema>;
