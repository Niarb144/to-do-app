import React, {useState} from "react";

function InputArea(props) {
    const[listItem, setList] = useState("");

    function handleChange(event){
        const value = event.target.value;
        setList(value);
        console.log(value)
        // listItems.push(value)
        // console.log(listItems);
        
      }
  return (
    <div className="form">
      <input onChange={handleChange}/>
      <button onClick={() => {
        props.onClick(listItem);
        setList("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
