import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

import { todos } from '@/db/schema'

const insertSchema = createInsertSchema(todos)
const selectSchema = createSelectSchema(todos)

export const newTodo = insertSchema.pick({
  todo: true,
})

export const completeTodo = selectSchema.pick({
  id: true,
  done: true,
})
