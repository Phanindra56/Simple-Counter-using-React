import { PropTypes } from 'prop-types'
// import { useState } from 'react'
import './Counter.css'


export default function CounterButton({by,incrementFunction, decrementFunction}){

    
    //A state  returns two things in an array one is intitial value and second is a internal function [0,f] 
    // This function is used to update the state
    // const [count,setCount]=useState(0)

    // function incrementCounterFunction(){
    //         // state[1](state[0] +1)
    //         // console.log(state[0])
    //         // console.log(state[1])

    //         // setCount(count + by)
    // //         incrementCounterParentFunction(by)
    // // }
    // function decrementCounterFunction(){
    //     // setCount(count - by)
    //     decrementCounterParentFunction(by)
    // }
    
    
    return(
    <div className="Counter">
        {/* <span className="count" style={{fontSize:"60px"}}>{count}</span> */}
        <div>
            <button 
                className="counterButton" 
                onClick={() => incrementFunction(by)}
            > 
        +{by}
        </button>
        
        <button 
                className="counterButton" 
                onClick={() => decrementFunction(by)}
            >
        -{by}
        </button>
        </div>
    </div>
    )
}

CounterButton.propTypes={
    by: PropTypes.number
};

CounterButton.defaultProps={
    by:1
};