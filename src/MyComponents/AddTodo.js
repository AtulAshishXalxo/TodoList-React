import React, {useState} from 'react'


export default function AddTodo({addTodo}) {


    
    const [title, setTitle] = useState();
    const [Desc, setDesc] = useState();
     
    

    const submit = (e) => {
        e.preventDefault();
        if(!title || !Desc)
        {
            alert("Title or description cannot be blank");
        }
        else
        {
            
            addTodo(title, Desc);
            setTitle("");
            setDesc("");
        }
      
    }

    return (
        <div className="container my-5 ">
            <form onSubmit={submit}>
                <h5 className="text-center mt-5">Add New Todo</h5>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="exampleInputEmail1"  placeholder="Title"/>
                        
                    </div>
                    <div className="form-group mb-3"> 
                        <input type="text" className="form-control" id="exampleInputPassword1" value={Desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description here"/>
                    </div>

                    <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block ">Add Todo</button>

                    </div>
                </form>
        </div>
    )
}
