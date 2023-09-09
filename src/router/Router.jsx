// Basic of React-Router-Dom;
// import {
// 	createBrowserRouter,
// 	Route,
// 	createRoutesFromElements,
//   } from "react-router-dom";
  
//   import Home from "../Pages/Home";
//   import About from "../Pages/About";
  
//   export const routerdom = createBrowserRouter(
// 	createRoutesFromElements(
// 	  <>
// 		<Route path="/" element={
// 			<div>
// 				Home Page!
// 			</div>
// 		} />
// 		<Route path="/about" element={
// 			<div>
// 				I am About page!
// 			</div>
// 		} />
// 	  </>
// 	)
//   );


import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import TodoDetails from "../Pages/TodoDetails";
// import {Params } from "react-router-dom";

export const routerdom = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
	  <Route loader={({ params }) => {
					return fetch(`https://jsonplaceholder.typicode.com/todos/${params.TodoId}`);
				}} path="/Todo-Details/:TodoId" element={
           <TodoDetails/>
	  }/>
	  {/* To handle error create by clint*/}
	  <Route path="*" element={
		<div>
			There is nothing found in this path!
		</div>
	  }/>
    </>
  )
);
