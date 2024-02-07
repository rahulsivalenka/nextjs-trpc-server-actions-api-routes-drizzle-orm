import { z } from 'zod'

export const newTodo = z.object({
  todo: z.string().max(1000),
})
