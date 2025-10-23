import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
function App() {
  let [todo, setTodo] = useState("")
  let [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), task: todo, isCompleted: false }])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleEdit = () => {
    console.log("Edit Button was clicked")
  }
  const handleDelete = () => {
    console.log("Delete button was clicked")
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }
  return (
    <>
      <div className="container  mx-auto w-[50vw]" >

        <h1 className="text-4xl font-[Cooper,Arial,Sans-Serif] text-center my-10 mx-auto w-full p-5 bg-violet-100 rounded-xl">TODO LIST</h1>

        <div className="w-full flex flex-row gap-[5px]">
          <input onChange={(e) => handleChange(e)} value={todo} type="text" className="border-2 border-gray-400 rounded-[5px] w-[80%] p-2" placeholder="Add Task..."></input>
          <button onClick={handleAdd} className="w-[20%] bg-blue-600 hover:bg-blue-800 p-2 rounded-[5px] text-white cursor-pointer" >Add</button>
        </div>

        <div className="todos w-full mx-auto flex flex-col gap-[3px] my-5">
          {todos.map(item => {
            return (
              <div key={item.id} className="w-full flex flex-rows items-center gap-3 bg-gray-200 rounded-[10px] p-2 my-[5px]">
                <div className="w-[65%] p-2 flex flex-row gap-2">
                  <input type="checkbox" value={item.isCompleted} name={item.id} onChange={(e) => handleCheckbox(e)}></input>
                  <p className={item.isCompleted ? "line-through" : ""}>{item.task}</p>
                </div>

                <div className=" flex flex-row w-[35%] gap-2 justify-center items-center ">
                  <button className="w-full p-2 bg-blue-600 hover:bg-blue-800 rounded-[5px] text-white cursor-pointer" onClick={handleEdit}>Edit</button>
                  <button className="text-white bg-red-700 rounded-[5px] w-full p-2 hover:bg-red-800 cursor-pointer" onClick={handleDelete}>Delete</button>
                </div>

              </div>
            )
          })}
        </div>
        
      </div>
    </>
  )
}

export default App;
