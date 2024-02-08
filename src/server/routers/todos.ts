import { todosDao } from '@/db'
import * as validations from '@/validations/todos'

import { procedure, router } from '../trpc'

export const todosRouter = router({
  getAll: procedure.query(() => {
    return todosDao.getAll()
  }),
  add: procedure.input(validations.newTodo).mutation((opts) => {
    return todosDao.add(opts.input)
  }),
  complete: procedure.input(validations.completeTodo).mutation((opts) => {
    return todosDao.update(opts.input)
  }),
})
