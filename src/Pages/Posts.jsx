import Nav from "../Component/Nav"
import { useFetch } from "../CustomHook/useFetch"
import { Link } from "react-router-dom";

const Posts = () => {
   const {data:Posts,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/posts/',[]);
  return (
    <div>
      <h1>Posts</h1>
      <Nav/>
      <h1>Posts</h1>
      {isLoading&&(
        <p>Loading........................</p>
      )}
      {error&&(
        <p>{error}</p>
      )}
    {Posts.map((post)=>(
      <Link to ={`/posts/${post.id}`} key = {post.id}>
      <li>
          {post?.title}
      </li>
      </Link>
    ))}
    
    </div>
  )
}

export default Posts