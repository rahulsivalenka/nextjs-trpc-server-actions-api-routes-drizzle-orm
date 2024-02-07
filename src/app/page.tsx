import { service } from '@/utils/trpc'

export default async function Home() {
  const { greeting } = await service.hello({ text: 'tRPC' })
  const todos = await service.todos.getAll()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {greeting}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}
