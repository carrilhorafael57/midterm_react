import React from 'react'

const Note = ({noteList, deleteNote}) => {
    return (
        noteList.map((note) => (
        <div className='note' key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    )));
}

export default Note
