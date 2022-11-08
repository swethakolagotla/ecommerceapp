import React from "react";
import { useState } from "react";
import TaskItems from "./TaskItems";

const Todo = () => {
  // const [input,setInput]=useState("");
const defaultState = {
  name: "",
  date: "",
  index: 0,
  id: "",
};
  const [task, setTask] = useState(defaultState)
  console.log(useState)
    
  // object state to set so we know which todo item we are editing
  //const [currentTodo, setCurrentTodo] = useState({
    //name:newName,
    //date:newDate,
  //});

  const [itemsarray, setItemsArray] = useState([]);
const [editmode,setEditmode]=useState(false);
  const inputChange = (event) => {
    //console.log(event);

    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const addToItemArray = () => {
    itemsarray.push(task);
    setItemsArray([...itemsarray]);
     setTask({
name:"",
date:""
  })
  };
   
  const removeItem = (index) => {
    console.log("Remove item clicked", index);
 itemsarray.splice(index,1)
setItemsArray([...itemsarray])
    // Apply operation on array

    // we have to find the item on the basis of index

    // remove the item

    // Set the new array in the state
  };
  const EditToDo=(ele)=>{
      setTask({
        name: ele.name,
        date: ele.date,
      });
setEditmode(false);
  }
 const editItem = () => {
   console.log(task);
     //itemsarray.splice(task.index, 1);
  //itemsarray[task.index] = task;

  //setItemsArray([...itemsarray]);
const filteredData=itemsarray.filter(ele=>ele.id!==task.id)
//filteredData[task.index]=task

filteredData.push(task);
setItemsArray([...filteredData]);


   }
   // We have to delete the old data
   // We have to enter the new data --->
 
  
  /*
 const   handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      itemsarray.push(task);
    setItemsArray([...itemsarray]);
    }
  }
  */

  return (
    <div className={"container"}>
      <h1 style={{ textAlign: "center" }}>My ToDo App</h1>
      <div className={"row"} style={{ marginTop: "40px" }}>
        <div className={"col-md-6"}>
          <input
            type={"text"}
            className={"form-control"}
            value={task.name}
            name={"name"}
            placeholder={"Task Name"}
            onChange={inputChange}
          />{" "}
          <br></br>
          {/* <input type={"date"} className={"form-control"}  value={task.date} name={"date"} onKeyDown={handleKeyPress} placeholder={"Task End Date"} onChange={inputChange}/> <br></br>*/}
          <input
            type={"date"}
            className={"form-control"}
            value={task.date}
            name={"date"}
            placeholder={"Task End Date"}
            onChange={inputChange}
          />{" "}
          <br></br>
          {editmode ? (
            <button className={"btn btn-primary"} onClick={editItem}>
           edit todo
            </button>
          ) : (
            <button className={"btn btn-primary"} onClick={addToItemArray}>
              Add ToDo
            </button>
          )}
          
        </div>

        <div className={"col-md-6"}>
          <ul className={"list-group"}>
            {/* <TaskItems data={ele} i={i} />*/}
            {itemsarray.map((ele, i) => (
              <li key={ele.id} className="list-group-item" aria-current="true">
                <strong>Name - </strong>
                {ele.name} <strong>Finish Date -</strong> {ele.date}
              <button
                  className={"btn btn-danger"}
                  style={{ marginLeft: "20px" }}
                  onClick={() => removeItem(i)}
                >
                  Delete
                </button>
                <button
                  className={"btn btn-secondary"}
                  style={{ marginLeft: "20px" }}
                  onClick={() => EditToDo(ele,i)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
