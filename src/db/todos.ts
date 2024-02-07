import db from './db'
import { todos } from './schema'

export async function getAll() {
  return db.select().from(todos).all()
}
