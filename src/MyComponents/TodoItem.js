import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div className="m-5 p-5 bg-white">
            <div className="row">
                <div className="col-10">
                        <h4 className="text-success">{todo.title}</h4>
                        <h6 className="text-secondary">{todo.Desc}</h6>
                </div>
                <div className="col-2">
                        
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                </div>
            </div>
            
       
        </div>
    )
}
