import React from 'react'

const Note = ({title, note}) => {
    return (
        <div className='note'>
            <h1>{title} Title here..</h1>
            <p>{note} Note here..</p>
        </div>
    )
}

export default Note
