import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SingleTodo from './SingleTodo'

test('render a single todo item', () => {
  const todo = {
    _id: "61d2e78dc45cf80a89470344",
    text: "play the piano",
    done: false
  }

  const onClickDelete = jest.fn()
  const onClickComplete = jest.fn()

  const component = render(
    <SingleTodo todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
  )

  expect(component.container).toHaveTextContent(
    'play the piano'
  )
})