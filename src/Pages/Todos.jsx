

import Nav from '../Component/Nav';
import { useFetch } from '../CustomHook/useFetch';

const Todos = () => {
     const {data:Todos,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/todos/',[])
  return (
    <div>
      <Nav/>
      <h1>Todos</h1>
      {isLoading&&(
        <p>Loading........................</p>
      )}
      {error&&(
        <p>{error}</p>
      )}
     <ul>
     {Todos.map((todo)=>(
      <li key={todo.id}> 
        {todo.title}
      </li>
     ))}
     </ul>
    
    </div>
  )
}

export default Todos