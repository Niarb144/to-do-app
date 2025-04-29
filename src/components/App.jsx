import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const[items, setItems] = useState([]);

  

  function addItem(listItem){
    setItems(prevItems => {
      return [...prevItems, listItem];
    });
    // listItems.push(newItem);
    // console.log(newItem);
    // console.log(listItems);    
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) =>{
          return index !== id;
        }
      );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea         
        onClick = {addItem}
      />
      {/* <div className="form">
        <input onChange = {handleChange} value={listItem} name="item"/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div> */}
      <div>
        <ul>
          {items.map((item, index) => (
              <ToDoItem 
                key = {index}
                id = {index}
                text = {item}
                onChecked = {deleteItem}
              />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
