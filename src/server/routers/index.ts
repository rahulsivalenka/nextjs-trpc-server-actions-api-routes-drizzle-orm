import { z } from 'zod'
import { procedure, router } from '../trpc'
import { todosRouter } from './todos'

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      }
    }),
  todos: todosRouter,
})

export type AppRouter = typeof appRouter
