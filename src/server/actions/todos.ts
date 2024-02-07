'use server'

import { service } from '@/utils/trpc'
import { revalidatePath } from 'next/cache'

export default async function addTodo(formData: FormData) {
  return service.todos
    .add({
      todo: formData.get('todo') as string,
    })
    .finally(() => {
      revalidatePath('/')
    })
}
