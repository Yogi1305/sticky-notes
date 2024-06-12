import React from 'react';
import "./Notes.css"
const Notes = (props) => {
  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
      <textarea className='note_textarea'>{props.note.text}</textarea>
      <p>{props.note.time}</p>
        
    </div>
  )
}

export default Notes