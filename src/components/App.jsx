import React, { useState } from "react";

function App() {
  const listItems = [];
  const[listItem, setList] = useState({
    item: ""
  });
  

  function handleChange(event){
    const{name, value} = event.target;
    setList(prevValue => {
      return {
        ...prevValue,
        [name] : value
      };
    });
    console.log(value)
    listItems.push(value)
    console.log(listItems);
    
  }

  function addItem(){
      const newItem = listItem.item

    // listItems.push(newItem);
    console.log(newItem);
    console.log(listItems);
    
    
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {handleChange} value={listItem.item} name="item"/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{listItem.item}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
