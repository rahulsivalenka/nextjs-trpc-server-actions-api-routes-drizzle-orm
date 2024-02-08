'use client'

import React from 'react'

import type { Todo } from '@/db/todos'
import { completeTodo } from '@/server/actions/todos'

type TodoItemProps = Todo

function TodoItem({ done, id, todo }: TodoItemProps) {
  return (
    <label
      tabIndex={0}
      role="button"
      className="flex items-center gap-2 p-2 cursor-pointer"
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={done || false}
        onChange={() => {
          completeTodo(id, !done)
        }}
      />
      <span>{todo}</span>
    </label>
  )
}

export default TodoItem
