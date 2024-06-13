import React from "react";
import "./Notes.css";
import deletedIcon from "../../assest/delete.svg";
let timer = 500,
  timeout;
const Notes = (props) => {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let sec = date.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min}:${sec} ${amPm} ${day} ${month}`;
  };
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_textarea"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
       
    
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deletedIcon}
          alt=""
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Notes;
