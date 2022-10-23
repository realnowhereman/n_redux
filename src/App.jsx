import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo =() => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos, 
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('');
    }
    
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !==todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos.map(
      todo => {
        if (todo.id !== todoId) {
          return todo;
        }
        else {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      }
    )
  }

  return (
    <div className='App'>
      <a href="https://youtu.be/C0fBnil_Im4?t=1417" target={'_blank'}>stopped</a>
      <hr />
      
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
