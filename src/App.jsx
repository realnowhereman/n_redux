import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo, removeTodo } from './redux/todo/todoSlice';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className='App'>
      <a href="https://youtu.be/C0fBnil_Im4?t=1417" target={'_blank'}>stopped</a>
      <hr />
      
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
