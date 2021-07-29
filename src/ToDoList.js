import React from "react";
import "./App.css";

const ToDoList =(props) => {
    return(
        <>
        <div className="Todo">
        <i className="fa fa-remove" arial-hidden="true" onClick={() =>{
            props.onSelect(props.id);
        }} >-</i>
           <li>{props.text}</li>  
        </div>
        </>
    );
}

export default ToDoList;
