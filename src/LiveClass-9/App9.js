import { useState,useEffect} from "react";
import "./app9.css";

const App9 =()=>{
      const[Todos,setTodos]=useState([]);
      const [counter,setcounter]=useState(0);
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    // .then((res)=>res.json())
    // .then((data)=>setTodos(data))
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res)=>res.json())
    .then((data)=>{setTodos(data)
         console.log(data ,'data');
         console.log("Hello i am from the outside of return!");
    })
    },[counter]);
    
    return(
        <div className="app9">
           <h1>All Todos Are</h1>
           {Todos?.map((items)=>(
            <li>
                {items.title}
            </li>
           ))}
           <h2>Click by {counter}</h2>
           <button onClick={()=>{setcounter(counter+1)}}>click here</button>
        </div>
    )
}

export default App9