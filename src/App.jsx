import { useState } from 'react'
import Navbar from './components/Navbar'
import{v4 as uuidv4}from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4() ,todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleEdit = () => {

  }
  const handleDelete = (e,id) => {
    const Confirmation=window.confirm("Are you sure you want to delete this todo?")
    if(Confirmation){
let newTodos= todos.filter(item=>{
  return item.id !== id;
})
setTodos(newTodos);}
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
let id = e.target.name;
console.log(id);
let index = todos.findIndex(item=>{
  return item.id === id;
})
console.log(index);
let newTodos=[...todos]
newTodos[index].isCompleted = !newTodos[index].isCompleted;
setTodos(newTodos)
  }
  return (
    <>
      <Navbar />
      <div className="container flex flex-col gap-7 bg-violet-200 mx-auto my-16 rounded-md p-5 min-h-[80vh]">
        <div className="add_todos">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-2/5 rounded-md' />
          <button onClick={handleAdd} className='bg-violet-700 hover:bg-violet-900 text-white font-bold px-4 py-1 rounded-md mx-4'>Add</button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>
        {todos.length === 0 && <p className='text-sm font-normal flex justify-center'> I'm impressed by your ability to have absolutely<strong>NOTHING TO DO.</strong> That's a skill!
          </p>}
        {todos.map(item => {

          return <div className="your_todos flex flex-col-reverse">

            <div className="todo flex flex-row justify-between">
              <div className="todo-list flex gap-2 align-middle">
                <input type="checkbox" onChange={handleCheckbox} value={item.isCompleted} name={item.id} id="" className='mb-2' />
                <div key={todo} className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
              </div>
              <div className="buttons flex gap-5">
                <button onClick={handleEdit} className='bg-violet-700 hover:bg-violet-900 text-white font-bold px-4 py-1 rounded-md'>Edit</button>
                <button onClick={(e)=>handleDelete (e, item.id) } className='bg-violet-700 hover:bg-violet-900 text-white font-bold px-4 py-1 rounded-md'>Delete</button>
              </div>
            </div>
          </div>
        })}



      </div>
    </>
  )
}

export default App
