
import { useEffect, useState } from 'react';
import './App.css';
import NotesContainer from './component/NoteContainer/NotesContainer';
import Sidebar from './component/Sidebar/Sidebar';




function App() {
  const [notes,setnotes]=useState(JSON.parse(localStorage.getItem('sticky-note'))||[]);
  
  const addNote=(color)=>{
    const timed=new Date().toISOString();
    const tempnotes=[...notes];
    tempnotes.push({
      id:Date.now(),
      text:"",
      time:timed,
      color:color
    });
    // tempnotes.reverse();
    setnotes(tempnotes);
  }
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setnotes(tempNotes);
  };
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setnotes(tempNotes);
  };
  useEffect(() => {
    localStorage.setItem("sticky-note", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
    <NotesContainer note={notes}  deleteNote={deleteNote}
      updateText={updateText}/>
    </div>
  );
}

export default App;
