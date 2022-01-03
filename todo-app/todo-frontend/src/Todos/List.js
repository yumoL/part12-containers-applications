import React from 'react'
import SingleTodo from './SingleTodo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map(todo =>
        <SingleTodo
          key={todo._id}
          todo={todo}
          onClickDelete={onClickDelete}
          onClickComplete={onClickComplete} />)}
    </>
  )
}

export default TodoList

//.reduce((acc, cur) => [...acc, <hr key={cur._id}/>, cur], [])
