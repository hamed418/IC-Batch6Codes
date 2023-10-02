

import './App.css'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AsynThunkRTK } from './Store/Todo'



const App = () => {  
     const {todos,loading,error}= useSelector((state)=>state.todos)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(AsynThunkRTK())
    },[])

    return (
        <div className='App'>   
         <h1>All Todos</h1>
        <ul>
            {todos.map(item=>(
                <li key={item.id}>
                    {item.title}
                </li>
            ))}
            {loading && (
                <p>Loading.................</p>
            )}
            {error && (
                <p>{error}</p>
            )}
        </ul>
        </div>
    )
}

export default App