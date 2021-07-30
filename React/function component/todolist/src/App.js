import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTodo.length == 0){
      return;
    }
    const todoItem ={
      text: newTodo,
      complete: false
    };
    setNewTodo(todoItem);
    setTodos([...todos,todoItem]);
    setNewTodo(""); 
  };
  const handleDelete= ( idx) => {
    const filterTodos = todos.filter((todo ,i) => {
      return i != idx ;
    });
    setTodos(filterTodos);
  };
  const handleComplete=(id) => {
    const updatedTodos = todos.map((todo, i) => {
      if(i == id){
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
        <form onSubmit={ addTask }>
            <div>
                <input type="text" value={newTodo} onChange={ (e) => setNewTodo(e.target.value) } />
            </div>
            <input type="submit" value="Add" />
        </form>
        {
          todos.map((todo,i) => {
            const spanStyle=[];
            if(todo.complete){
              spanStyle.push("line-through");
            }
            return <div key={i}>
              <input type="checkbox" checked={todo.complete} onChange={(e) => {handleComplete(i) }}/>
              <span className={spanStyle.join(" ")}>{todo.text}</span>
              <button onClick= {(e ) => {handleDelete( i); }} style={{marginLeft:'10px'}}>Delete</button>
              </div>
          })
        }

    </div>
  );
}

export default App;
