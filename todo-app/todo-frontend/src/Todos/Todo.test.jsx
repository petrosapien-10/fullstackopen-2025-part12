import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'

describe('Todo component', () => {
  const sampleTodo = { _id: '1', text: 'Write code', done: false }

  test('renders todo text', () => {
    render(<Todo todo={sampleTodo} deleteTodo={() => {}} completeTodo={() => {}} />)
    expect(screen.getByText('Write code')).toBeInTheDocument()
  })

  test('shows correct status when not done', () => {
    render(<Todo todo={sampleTodo} deleteTodo={() => {}} completeTodo={() => {}} />)
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })

  test('shows correct status when done', () => {
    const doneTodo = { ...sampleTodo, done: true }
    render(<Todo todo={doneTodo} deleteTodo={() => {}} completeTodo={() => {}} />)
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
  })
})
