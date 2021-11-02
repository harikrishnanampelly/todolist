
import React from 'react';
import './App.css';
import TodoList from './todolist';
function App() { 
   const[name,setName]=React.useState(""); 
    const[todos,setTodos]=React.useState([]); 
    const  changeHandler=e=>{
       setName(e.target.value)
    }
    const textHandler=e=>{ 
         e.preventDefault();    
       const newtodos=[...todos,name]; 
          setTodos(newtodos);
            setName(""); 
         }
         const deleteHandler=(indexValue)=>{
            const newtodos=todos.filter((todo,index)=>index!==indexValue);
            setTodos(newtodos);
         }
           return ( 
              <div id="f1" >


 <center>   
   <div className="card"> </div>
   <div className="card-body"></div>
              <h1 id="h1">React First Assignment</h1>      
      <form onSubmit={textHandler}> 
        <input id="b1" placeholder="Enter Any Information" size="30"type="text"  value={name} onChange={changeHandler}></input>&nbsp;&nbsp;           
    <input id="b2" type="submit" name="add" value="Add"></input>      
        </form>      
        <TodoList todolist={todos} deleteHandler={deleteHandler}/>       
        </center>  
      </div> 
     );
    }
    export default App;





