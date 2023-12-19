import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo">
      <p className="para">{title}</p>
      <button className="btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
