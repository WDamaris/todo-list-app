import React from "react"
import { Delete } from '@mui/icons-material'
function TodoForm({input,setInput,todos,setTodos}){
   
    const handleChange= (e)=>{
        setInput(e.target.value)
    }
    const handleSubmit=(e) => {
     e.preventDefault();
    }

    function addTodo (){
if (!input) {
    alert("Enter Task");
    return;
}
            const todo= {
            id: Math.floor(Math.random() *1000),
            value: input
            }
            setTodos(currentTodo => [...currentTodo,todo])
            setInput("")
            console.log(todos)
        }

        function  deleteTodo(id){
            const newArray=todos.filter(todo=> todo.id !==id)
            setTodos(newArray);
        }
         function completedTodo(id){
          const updatedTodos= todos.map((todo) =>{
            if (todo.id ===id) {
                todo.completed= !todo.completed
            }
            return todo
             })
            setTodos(updatedTodos)

         }
    
    return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}>
               <h1> What are planning today?</h1>
            <input
            className="todo-input"
            type="text"
            placeholder="Add a todo..."
            value={input}
            required
            onChange={handleChange}  
                  
            />
              <button className="todo-button"onClick={() =>addTodo()}>Add Todo</button>
              </form>
              {/* List of Todos */}
               <div className="todo-list">
              <ul> 
               {todos.map(todo => {
                return(
                    <li key={todo.id}>{todo.value}
                    <div className="icon">                                                   
                     <input
                    type="checkbox"
                    onChange={()=>completedTodo(todo.id)}
                    checked={todo.completed}
                    />
                    <Delete onClick={() =>deleteTodo(todo.id)}/>
                    </div>
                    </li>
                   
                )
               }
                )}
              </ul>
              </div> 
         
    </div>    
        
    )
}
export default TodoForm;