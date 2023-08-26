import './App2.css';
import { useState } from 'react';
const App2=()=>{
    const [countobj,setcountobj]=useState({
        count:1,
        count2:100
    });
    const Increase=(value)=>{
        setcountobj({
            ...countobj, //Spread operator,it help to set the normal value as it previous! 
            count:countobj.count+value,     
            count2:countobj.count2+value
        });
    }
    const Discrease=(valu)=>{
        setcountobj({
            ...countobj,
            count:countobj.count-valu,
            count2:countobj.count2-valu
        });
    }
    return(
        <div className="App2">
            <h3>Change The counter by {countobj.count}</h3>
            <h3>Change the second Conuter by {countobj.count2}</h3>
            <button onClick={()=>Increase(1)}>Click for Increase by 1</button>
            <button onClick={()=>Increase(5)}>Click for Increase by 5</button>

            <button onClick={()=>Discrease(1)}>Click for Discrease by 1</button>
            <button onClick={()=>Discrease(3)}>Click for Discrease by 3</button>
        </div>
    )
}

export default App2