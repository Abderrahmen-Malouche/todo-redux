import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/slices/todoSlice'
function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));

  }
  return (
    <ul className="flex flex-wrap gap-y-3">
      {todos.map((todo) => (
        <li key={todo.id} className="w-full flex justify-between items-center bg-white/10 p-3 rounded-lg">
          <input
            type="text"
            className="border outline-none w-full bg-transparent rounded-lg border-transparent"
            value={todo.title}
            readOnly
          />
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>)
}

export default TodoList