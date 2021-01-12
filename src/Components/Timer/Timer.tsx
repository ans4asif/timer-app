import React from 'react'

export const Timer = (props:any) => {
    return (
        <div className="box">
            
            <span className="text">{props.time.h > 0 ? props.time.h: "00"}</span><strong className="dots">:</strong>
            <span className="text">{props.time.m > 0 ? props.time.m: "00"}</span><strong className="dots">:</strong>
            <span className="text">{props.time.s > 0 ? props.time.s: "00"}</span>
           
            </div>

    
    )
}
