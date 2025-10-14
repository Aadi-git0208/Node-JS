import { useEffect, useState } from "react";                                                                                                                                                         
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("ureter")) || [];
    setTasks(savedTasks);
  },[]);
  //Add Task
  const addTask = (e)=>{
    e.preventDefault();
    if(taskText.trim()===""|| taskDate.trim()===""|| taskTime.trim()===""){
      alert("Please fill all the fields");
      return;
    }
      const newTask = {
        id: Date.now(), 
        task:taskText,
        date:taskDate,
        time:taskTime,
        completed:false
      };
      setTasks([...tasks,newTask]);
      setTaskText("");
      setTaskDate("");
      setTaskTime("");
    
  }
  return (
    <div>
      <h1> To-Do Task List</h1>
      <form onSubmit={addTask}>
        <input type="text" placeholder="Add a new task" ></input>
        <input type='date'></input>
        <input type='time'></input>
        <button type='submit'>Add Task</button> 
      </form>
      <ul>
        {tasks.map((task)=>(
          <li>
            
          </li>
        ))}
      </ul>

    </div>
  )
}
export default App;