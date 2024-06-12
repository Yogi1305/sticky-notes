import React from 'react'
import Notes from '../Notes/Notes'
import "./NotesContainer.css"


const NotesContainer = () => {
  const currtime=new Date().toLocaleDateString();
  return (
    <div className='note_container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>

      
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      <Notes note={{
        text:"myself",
        time:currtime,
        color:"cyan"
      }}/>
      </div>
    </div>
  )
}

export default NotesContainer