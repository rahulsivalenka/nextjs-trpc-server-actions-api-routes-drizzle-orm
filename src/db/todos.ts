import { desc } from 'drizzle-orm'
import db from './db'
import { todos } from './schema'

export type NewTodo = typeof todos.$inferInsert
export type Todo = typeof todos.$inferSelect

export async function getAll() {
  return db.select().from(todos).orderBy(desc(todos.id))
}

export async function add(input: NewTodo) {
  return db.insert(todos).values(input)
}
