import { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import TodoList from './Todolist';
import Profile from './Profile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery />
    </>
  );
}

export default App
