'use server'

import { revalidatePath } from 'next/cache'

import { service } from '@/utils/trpc'

export default async function addTodo(formData: FormData) {
  return service.todos
    .add({
      todo: formData.get('todo') as string,
    })
    .finally(() => {
      revalidatePath('/')
    })
}

export async function completeTodo(id: number, done: boolean) {
  return service.todos
    .complete({
      id,
      done,
    })
    .finally(() => {
      revalidatePath('/')
    })
}
