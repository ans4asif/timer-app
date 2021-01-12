import React from 'react'

export const TimerBtn = (props:any) => {
    return (
        <div className="Timer-btn">
            <button onClick={props.startTimer} className="btn">Start</button>
            <button onClick={props.stopTimer} className="btn-stop">Stop</button>
            <button onClick={props.resetTimer} className="btn">Reset</button>

        </div>
    )
}
