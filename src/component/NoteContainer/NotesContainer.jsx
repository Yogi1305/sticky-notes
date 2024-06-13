import React from 'react'
import Notes from '../Notes/Notes'
import "./NotesContainer.css"


const NotesContainer = (props) => {
 
  return (
    <div className='note_container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>
      
      {
         props.note.map((item)=><Notes key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />)
      }
    
     
      
      
      
      </div>
    </div>
  )
}

export default NotesContainer