import { todosDto } from '@/db'

import { procedure, router } from '../trpc'

export const todosRouter = router({
  getAll: procedure.query((opts) => {
    return todosDto.getAll()
  }),
})
