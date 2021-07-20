/* import logo from './logo.svg'; */
import './App.css';
import Header from "./MyComponents/Header"
import About from "./MyComponents/About"
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useState, useEffect} from "react";
import AddTodo from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  /*addtodo function */
  const addTodo = (title, Desc) => {
    /* alert("passing "+ title + Desc); */
    let sno ;
    if(todos.length === 0)
    {
      sno = 1;
    }
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno : sno,
      title : title,
      Desc : Desc
    }
    setTodos([...todos, myTodo]);

    /* localStorage.setItem("todos", JSON.stringify(todos)); */
    }
/*addtodo function ends*/

 
/*Detele function */
  const onDelete = (todo)=>{

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }
/*Detele function ends */


  const [todos, setTodos] = useState(initTodo); //todos list

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  return (

    <>
    <Router>
      <Header title="TodoList"/>

      <Switch>

          <Route exact path="/" render={() =>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} sample="atul" onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>

        </Router>
      
      
      <Footer/>
    </>
  );
}

export default App;
