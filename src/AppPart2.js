import "./App.css";
import Footer from "./componentspart2/Footer";
import Header from "./componentspart2/Header";
import Note from "./componentspart2/Note";
import "./styles.css";
import notes from "./notes";
import React from "react";

function App() {
  // const [noteList, setNoteList] = useState([]);

  // let noteLst = notes.map((note, index) => (
  //   <Note key={index} content={note.content} title={note.title}/>
  // ));

  // setNoteList([noteList, ...noteLst]);
  return (
    <>
      <Header />
      <Note notes={notes} />
      <Footer />
    </>
  );
}

export default App;
