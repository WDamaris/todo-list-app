import React, {useState} from 'react';
// import './App.css';
import TodoForm from './components/TodoForm';
// import Todolist from './components/Todolist';
import './styles/todoform.css';
import './styles/todolist.css'

function App() {
  const [input, setInput]=useState("")
  const [todos, setTodos]=useState([])
  return (
    <div className="App-todo">
   
      <TodoForm 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      
      />
      {/* <Todolist /> */}
    </div>
  );
}

export default App;