import { desc, eq, sql } from 'drizzle-orm'

import db from './db'
import { todos } from './schema'

export type NewTodo = typeof todos.$inferInsert
export type Todo = typeof todos.$inferSelect
export type UpdateTodo = Pick<Todo, 'id'> & Partial<Pick<Todo, 'todo' | 'done'>>

export async function getAll() {
  return db.select().from(todos).orderBy(desc(todos.id))
}

export async function add(input: NewTodo) {
  return db.insert(todos).values(input)
}

export async function update(input: UpdateTodo) {
  return db
    .update(todos)
    .set({
      ...input,
      updatedOn: sql`CURRENT_TIMESTAMP`,
    })
    .where(eq(todos.id, input.id))
}
