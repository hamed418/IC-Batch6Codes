import { BrowserRouter,Routes,Route } from "react-router-dom"
import Posts from "../Pages/Posts"
import PostDetails from "../Pages/PostDetails"
import Todos from "../Pages/Todos"
import Home from "../Pages/Home"

const Router = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/Todos" element={<Todos/>}/>
    <Route  path="/Posts" element={<Posts/>}/>
    <Route path="/Posts/:postId" element={<PostDetails/>}/>
   </Routes>
  </BrowserRouter>
  )
}

export default Router