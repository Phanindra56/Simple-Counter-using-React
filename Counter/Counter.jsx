import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'

export default function Counter(){
    const [count,setCount]=useState(0)

    function incrementFunction(by){
            setCount(count + by)
    }
    
    function decrementFunction(by){
        setCount(count - by)
    }

    function resetFunction(){
        setCount(0)
    }


    return(
    <div>
        <span className="count" style={{marginBottom:"5px", marginLeft:"50%", fontSize:"60px"}}>{count}</span>
        <CounterButton by={1} incrementFunction={incrementFunction} decrementFunction={decrementFunction}  />
        <CounterButton by={5} incrementFunction={incrementFunction} decrementFunction={decrementFunction} />
        <CounterButton by={10} incrementFunction={incrementFunction} decrementFunction={decrementFunction} />
        <ResetButton resetFunction={resetFunction}/>
    </div>
    )
}

