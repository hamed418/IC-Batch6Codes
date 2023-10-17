import { useQuery ,useMutation,useQueryClient} from '@tanstack/react-query'
import { getAllnotes,CreateNotes,DeleteNotes} from '../services/notes';

import { useState } from 'react';
import {Link} from 'react-router-dom'
const Compo1 = () => {
    
    const [state,setState]=useState('');
    const client = useQueryClient();
    const {data,isLoading,fetchStatus,isError,error}=useQuery({queryKey:["notes"],queryFn:getAllnotes,refetchOnMount:false})
    const removeMutation=useMutation(DeleteNotes,{
    onSuccess:()=>{
        client.invalidateQueries(["notes"])
    }
    })
    const CreateMutation= useMutation(CreateNotes,{
        onSuccess:()=>{
            client.invalidateQueries(["notes"])
        }
    })

    //To create notes we have a handler:
   const  createHandler=(e)=>{
     e.preventDefault();
     if(!state){
        return alert(`Please enter a valid name!`)
     }
     const newnotes={
        id:Date.now()+"",
        title:state
     }
     CreateMutation.mutate(newnotes);
     setState(' ');
    }
  return (
    <div className='app'>
       
        <ul>
            <li>
                <Link to = '/'>Go to Compo 1</Link>
                <Link to = '/demo'>Go to Compo 2</Link>
            </li>
        </ul>
        <h2>
            Note App Compo 1
        </h2>
        <form>
            <input value={state} onChange={(e)=>setState(e.target.value)} type='text'/>
            <button onClick={createHandler}>Add Notes</button>
        </form>
        <ul>
            {data?.map(item=>(
                <li key={item.id}>
                   <span> {item.title}</span>
                    <button>Edit</button>
                    <button onClick={()=>{removeMutation.mutate(item.id)}}>Remove</button>
                </li>
            ))}
        </ul>
        {fetchStatus==='fetching' &&(
            <p>Loading..........</p>
        )}
        {isError && (
            <h2>{error?.message}</h2>
        )} 
    </div>
  )
}

export default Compo1