import React from 'react'
import sand from '../sand.jpg'

export const Header = () => {
    return (
        <div className='header-sec'>
            <img src={sand} alt="timer" className="bg"/>
            <h1 className="name1">Timer App</h1>
        </div>
    )
}
