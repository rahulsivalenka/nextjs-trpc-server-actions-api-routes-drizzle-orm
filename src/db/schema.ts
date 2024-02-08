import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const todos = sqliteTable('todos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  todo: text('todo', { length: 1000 }).notNull(),
  done: integer('done', { mode: 'boolean' }).default(false),
  createdOn: integer('created_on', { mode: 'timestamp_ms' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedOn: integer('updated_on', { mode: 'timestamp_ms' }),
})
