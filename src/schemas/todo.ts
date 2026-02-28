import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.number(),
  label: z.string(),
  checked: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;

export const TodoListSchema = z.array(TodoSchema);
export type TodoList = z.infer<typeof TodoListSchema>;