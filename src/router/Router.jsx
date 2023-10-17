import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Compo1 from './../Component/Compo1';
import Compo2 from './../Component/Compo2';

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Compo1/>}/>
    <Route path='/demo' element={<Compo2/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router