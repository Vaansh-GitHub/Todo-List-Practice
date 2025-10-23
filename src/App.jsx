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
  const handleEdit = (e,id) => {
    let ask=prompt("Enter New Todo : ")
    let index=todos.findIndex((item)=>{
      return item.id===id
    })
    let newTodos=[...todos]
    newTodos[index].task=ask;
    setTodos(newTodos)
  }
  const handleDelete = (e,id) => {
    let ask=confirm("Are you sure you want to delete this Todo?")
    if(ask)
    {
      let newTodo=todos.filter((item)=>{
          return(item.id!==id)
      })
      setTodos(newTodo);
    }
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

        <h1 className="text-4xl font-[Cooper,Arial,Sans-Serif] text-center my-10 mx-auto w-full p-5 bg-violet-100 rounded-xl max-[750px]:text-2xl">TODO LIST</h1>

        <div className="w-full flex flex-row gap-[5px] max-[550px]:flex-col">
          <input onChange={(e) => handleChange(e)} value={todo} type="text" className="border-2 border-gray-400 rounded-[5px] w-[80%] p-2 max-[750px]:w-full" placeholder="Add Task..."></input>
          <button onClick={handleAdd} className="w-[20%] bg-blue-600 hover:bg-blue-800 p-2 rounded-[5px] text-white cursor-pointer max-[750px]:w-[50%]" >Add</button>
        </div>

        <div className="h-fit w-full mx-auto flex flex-col gap-2 my-5">
          <div className="text-xl text-gray-300">
            {todos.length===0?"No Todos Available":""}
          </div>
          {todos.map(item => {
            return (
              <div key={item.id} className="w-full flex flex-rows items-center gap-3 bg-gray-200 rounded-[10px] p-2 my-2 max-[750px]:flex-col max-[750px]:items-start">
                <div className="w-[65%] flex flex-row gap-2 max-[750px]:w-full">
                  <input type="checkbox" value={item.isCompleted} name={item.id} className='border' onChange={(e) => handleCheckbox(e)}></input>
                  <p className={(item.isCompleted ? "line-through" : "")+"overflow-x-auto"}>{item.task}</p>
                </div>

                <div className="flex flex-row w-[35%] gap-2 justify-center items-center max-[750px]:w-full">
                  <button className="w-full p-2 bg-blue-600 hover:bg-blue-800 rounded-[5px] text-white cursor-pointer" onClick={(e)=>{handleEdit(e,item.id)}}>Edit</button>
                  <button className="text-white bg-red-700 rounded-[5px] w-full p-2 hover:bg-red-800 cursor-pointer" onClick={(e)=>{handleDelete(e,item.id)}}>Delete</button>
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
