import { useCreateNoteMutation, useGetAllNotesQuery,useRemoveNoteMutation } from "./Store/RTK-query"
import { useState } from "react";
import './app.css';
const App = () => {
    const [inputvalue,setinputvalue]=useState('');

    const {data,isLoading,error}=useGetAllNotesQuery()
    const [RemoveNotes]=useRemoveNoteMutation()
    const [CreateNote]=useCreateNoteMutation()
  return (
    <div className="app">
     <h1>Redux Toolkit Query</h1>
     <form onSubmit={(e)=>CreateNote(e)}>
      <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
      <button type="submit">Add Notes</button>
     </form>
      {isLoading && (
        <p>Loading.........</p>
      )}
      {error &&(
        <p>SomeThing went Wrong!!!!!!</p>
      )}
      <ul>
      {data?.map(item=>(
        <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={()=>RemoveNotes(item.id)}>Remove</button>
        </li>
        
      ))}
      </ul>
    </div>
  )
}

export default App