import React from "react";


export default function Todo(props) {
  console.log("inside todo com..",props)
  return (
    <div>
      <p onClick={() => props.toggleItem(props.item.id)} style={{textDecoration:props.item.completed?'line-through':'none'}}>
        
        {props.item.task}
      </p>
    </div>
  );
}


