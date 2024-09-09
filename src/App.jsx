import React, { useState, useEffect } from 'react'
import Addform from './components/Addform.jsx'
import Header from './components/Header.jsx'
import Item from './components/Item.jsx'
import "./App.css"
const App = () => {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task])
  const deleteTask = (id) => {
    console.log(id);
    const result = task.filter((item) => item.id !== id)


    setTask(result)
  }
  const [title, setTitle] = useState("")
  const saveTask = (e) => {
    e.preventDefault()

    if (!title) {
      alert("Insert task")
    } else if (editID) {
      //อัพเดทข้อมูล

      const updateTask = task.map((item) => {
        // รายการใดมีรหัสตรงกับรหัสแก้ไข
        if (item.id === editID) {
          return ({ ...item, title: title })
        }
        return item
      })
      console.log("อัพเดทข้อมูล");
      console.log(updateTask);
      setTask(updateTask)
      setTitle("")

    } else {
      // เพิ่มรายการใหม่ 
      console.log('save');
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title
      }
      setTask([...task, newTask])
      setEditID(null)

    }
  }
  const [editID, setEditID] = useState(null)
  const editTask = (id) => {
    console.log(id)
    setEditID(id)
    const editTask = task.find((item) => item.id === id)
    console.log(editTask);
    setTitle(editTask.title)

  }

  const saveNewTask = () => {

  }

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} editID={editID} />
        {task.map((data) => {
          return <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
        })}
      </div>

    </div>
  )
}

export default App