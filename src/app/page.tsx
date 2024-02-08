import AddTodoForm from '@/components/AddTodoForm'
import TodoItem from '@/components/TodoItem'
import { service } from '@/utils/trpc'

export default async function Home() {
  // const { greeting } = await service.hello({ text: 'tRPC' })
  const todos = await service.todos.getAll()

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      {/* {greeting} */}
      <AddTodoForm />
      <ul className="flex flex-col gap-2 w-96">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} />
          </li>
        ))}
      </ul>
    </main>
  )
}
