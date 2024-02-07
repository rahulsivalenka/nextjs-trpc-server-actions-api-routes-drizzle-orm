import React from 'react'

import addTodo from '@/server/actions/todos'

type Props = {}

function AddTodoForm({}: Props) {
  return (
    <form action={addTodo} className="flex gap-2 mb-2">
      <input
        autoFocus
        type="text"
        name="todo"
        required
        className="bg-gray-800 rounded-sm p-2"
      />
      <button type="submit" className="p-2">
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
