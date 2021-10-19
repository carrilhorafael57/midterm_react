import React, {useState} from 'react'

const Createarea = (props) => {
    const [title, setTitle] = useState("");
    const [noteArea, setNoteArea] = useState("");
    const [id, setId] = useState(1);

    const updateId = () => {
        setId((prevId) => prevId + 1);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        updateId();
        props.onSubmit({
            id: { id },
            title: title,
            content: noteArea
        });
  
        console.log(id);
        setTitle("");
        setNoteArea("");
      };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
        // console.log(title);
    };
    
    const handleChangeTextArea = (e) => {
        setNoteArea(e.target.value);
        // console.log(noteArea);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title here.." onChange={handleChangeTitle}/>
                <input type="textarea" placeholder="Add a Note here.." onChange={handleChangeTextArea}/>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </>
    )
}

export default Createarea

