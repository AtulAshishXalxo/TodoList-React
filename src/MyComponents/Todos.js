import React from 'react'
import TodoItem from './TodoItem'



export default function Todos(props) {
    return (
        <div className="container bg-light mt-2 p-2">
            <h4 className="text-center my-5">Todos List</h4>
        
        {props.todos.length === 0? <p className="text-danger text-center">No Todo to display</p>:
                props.todos.map((todo) => 
                    {
                        return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        
                    })
            }

         </div>
    )
}
