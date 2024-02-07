import { todosDto } from '@/db'
import { newTodo } from '@/validations/todos'

import { procedure, router } from '../trpc'

export const todosRouter = router({
  getAll: procedure.query(() => {
    return todosDto.getAll()
  }),
  add: procedure.input(newTodo).mutation((opts) => {
    return todosDto.add(opts.input)
  }),
})
