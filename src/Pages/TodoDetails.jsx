//import { useEffect,useState } from "react"
//import { useLoaderData } from "react-router-dom"

import { useEffect,useState } from 'react';
import { useParams,useLoaderData } from 'react-router-dom';
// import TodoDetails from './TodoDetails';

const TodoDetails = () => {
 
  // const [tododetails,settodoDetails]=useState(null);
  // const parameter=useParams();
  const tododetails=useLoaderData();


  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${parameter.TodoId}`)
  //   .then(res=>res.json())
  //   .then((data)=>{
  //     settodoDetails(data);
  //   })
  // },[])

  
  return (
    <div> The TodoDetails:
      <p>ID={tododetails?.id}</p>
      <p>Title={tododetails?.title}</p>
      <p>User-Id={tododetails?.userId}</p>
    </div>
  )
}

export default TodoDetails