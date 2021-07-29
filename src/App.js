import React, { Component, useState } from 'react';
import ToDoList  from './ToDoList';
import './App.css';
import FontAwesome from 'react-fontawesome';

const App =() => {
  const [inputList,setInputList]=useState("");
  const[array,setArray]= useState([]);

  const itemEvent = (event) =>{
setInputList(event.target.value);
  };

  const listofItem =() =>{
  setArray((oldItems) => {
    return [...oldItems,inputList];
  });

  setInputList("");
  };

  const deleteItems = (id)=>{
    console.log("deletd");

    setArray((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index!=id;
      })
    });
    
      };


  return(
    <div className="maindiv">
      <div className="subdiv">
        <br></br><br></br>
        <h1>TODO LIST</h1>
        <br></br>
        <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} ></input>
        <button className="success" onClick={listofItem} >+</button>
       {
         array.map((itemval,index) =>{
           return(
             <div className="inner">
              
             <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
           
           </div>);
         })
       }
        
      </div>

    </div>
  )
}
export default App;
