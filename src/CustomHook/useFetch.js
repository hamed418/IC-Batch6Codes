import { useState,useEffect } from "react"

export const useFetch = (url,initData) => {

    const [data,setdata]=useState(initData);
   const [isLoading,setisLoading]=useState(true);
   const [error,seterror] =useState('');

  useEffect(() => {
    fetch(url)
    .then((res)=>{
      console.log(res);
      if(!res.ok){
        throw new Error('Api is not found');
      }
        return res.json()
    }) 
    .then((Data)=>{
       setdata(Data)
       setisLoading(false)
      seterror(' ')
      })
      .catch(e =>{
         seterror(e.message)
         setdata([])
         setisLoading(false);
      })
  },[url])
  return {
     data,
     isLoading,
     error
  }
}