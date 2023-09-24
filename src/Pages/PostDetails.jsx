import React from 'react'
import Nav from '../Component/Nav'
import { useFetch } from '../CustomHook/useFetch'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
     const {postId}=useParams();
   const {data:PostD,isLoading,error}=useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,null);
  return (
    <div>
      <h1>PostDetails</h1>
      <Nav/>
      {isLoading&&(
        <p>Loading........................</p>
      )}
      {error&&(
        <p>{error}</p>
      )}
      <p>
          <i>Post Title:</i> {PostD?.title}
        </p>
        <p>
         <i> Post Id:</i> {PostD?.id}
        </p>
        <p>
         <i> post body:</i> {PostD?.body}
        </p>
    </div>
  )
}

export default PostDetails