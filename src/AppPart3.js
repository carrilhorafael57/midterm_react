import "./App.css";
import Footer from "./componentspart3/Footer";
import Header from "./componentspart3/Header";
import "./styles.css";
import React, { useState } from "react";
import Createarea from "./componentspart3/Createarea";
import Note from "./componentspart3/Note";

function App() {
  const [noteList, setNoteList] = useState([]);

  const addNote = (notes) => {
    const newNotes = [notes, ...noteList];
    setNoteList(newNotes);
  };

  const deleteNote = (id) => {
    const notesUpdated = [...noteList].filter((note) => note.id !== id);
    setNoteList(notesUpdated);
  };

  return (
    <>
      <Header />
      <Createarea onSubmit={addNote}/>
      <Note noteList={noteList} deleteNote={deleteNote} />
      <Footer />
    </>
  );
}

export default App;
