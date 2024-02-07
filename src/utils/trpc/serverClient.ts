import { appRouter } from '@/server/routers'
import { createCallerFactory } from '@/server/trpc'

const createCaller = createCallerFactory(appRouter)

export const serverClient = createCaller({})
