import logo from './logo.svg';
import './App.css';
import React from 'react';

function InputTodo ({tambahTodo}){
  const [getInput,setInput] = React.useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    tambahTodo(getInput);
    setInput("");
  };
  const handleInputTodo = (event) => {
    setInput(event.target.value)
  };

  return(
  <form onSubmit={handleSubmit}>
  <input type="text" value={getInput} onChange={handleInputTodo} placeholder="Tulis kegiatan disini..."/>
  <button type="submit">Add</button>
  </form>
  )
}

function App() {
  const [todos, arrTodos] = React.useState([]);
  const tambahTodo = text => {
    const newTodos = [...todos,{text}];
    arrTodos(newTodos);
    console.log(text);
    console.log(todos);
  };
  const hapusTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    arrTodos(newTodos);
  };
  return (
    <div className="iya">
      <div>
        <h1>To Do List</h1>
          <section id="form">
            <InputTodo tambahTodo={tambahTodo}/>
          </section>
        <div className="border">
          <section id="bullet">
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo.text} <button onClick={()=>hapusTodo(index)}>Delete</button></li>
              ))}
            </ul>
          </section>
        </div>
        <section id="pantat">
          <p>© Made by Nethan. For LBE RPL.</p>
          <p><i>*maaf gabisa ngasih fitur editing mas, bukan profesional progamer*</i></p>
        </section>
      </div> 
    </div>
  );
}

export default App;
