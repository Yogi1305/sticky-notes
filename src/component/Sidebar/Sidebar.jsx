import React, { useState } from "react";
import plusIcon from "../../assest/plus.png"
import "./Sidebar.css";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const[listopen,setlistopen]=useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={()=>{setlistopen(!listopen)}}/>
      <ul className={`sidebar_list ${listopen?"sidebar_list_active":""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_items"
            style={{ backgroundColor: color }}
            onClick={()=>props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
