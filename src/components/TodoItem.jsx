const TodoItem =({id, text, complete, removeTodo, toggleTodoComplete}) => {
  return (
    <li>
      <input type="checkbox" checked={complete}  onChange={() => toggleTodoComplete(id)}/>
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem;