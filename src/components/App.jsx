import React, { useState } from "react";

function App() {

  const[listItem, setList] = useState({
    item: ""
  });

  function handleChange(event){
    const{list, value} = event.target;
    setList(prevValue => {
      return {
        ...prevValue,
        [list] : value
      };
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {handleChange} value={listItem.item} name="item"/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App