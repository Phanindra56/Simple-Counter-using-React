import './Counter.css'

export default function ResetButton({resetFunction}){

    return(
    <div>
        <button className="resetButton" 
                onClick={resetFunction} 
                type="button">        
        RESET
        </button>

    </div>
    )
}