import React from 'react';

const Note = ({notes}) => {
    return (
        notes.map((note, index) => (
        <div className='note' key={index}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
    )));
};

export default Note;

// const Note = ({title, content, index}) => {
//     return (
//         <div className='note'
//         key={index}>
//             <h1>{title}</h1>
//             <p>{content}</p>
//         </div>
//     )
// }

// export default Note