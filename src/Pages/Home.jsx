import {Link} from "react-router-dom"
import { useEffect,useState } from "react" 

const Home = () => {
    const [Todos,setTodos]=useState([]);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(res=>res.json())
      .then((data)=>{
         setTodos(data)
         setloading(false)
      })
    },[])

  return (
    <div>
    <h1>Hello World!</h1>
    <Link to={'/about'}>Go to about page!</Link>
    <h3>All Todos</h3>
    {loading&&(
        <div>Loading...................</div>
    )}
    {Todos.map((data)=> (
        <li  key={data.id}>  
                <Link to={`/Todo-Details/${data.id}`}>
                {data.title}
               </Link>
        </li>
    ))
    }
</div>
  )
}

export default Home