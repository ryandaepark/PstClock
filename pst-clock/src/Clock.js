import React from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
 
    return (
        <h1>{time}</h1>
    )
}

export default Clock 