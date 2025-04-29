import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const[listItem, setList] = useState("");
  const[items, setItems] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setList(value);
    console.log(value)
    // listItems.push(value)
    // console.log(listItems);
    
  }

  function addItem(){
    setItems(prevItems => {
      return [...prevItems, listItem];
    });

    setList("");

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
      <div className="form">
        <input onChange = {handleChange} value={listItem} name="item"/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) =>
              <ToDoItem 
                key = {index}
                id = {index}
                text = {item}
                onChecked = {deleteItem}
              />
          )}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
