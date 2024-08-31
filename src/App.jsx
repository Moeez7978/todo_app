import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti'; 
import Modal_delete from './components/Modal_delete';



function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [done, setDone] = useState(false)
  const [open, setOpen] = useState(false)
  

 
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleComplete = (e, id) => {
    let confirmation = window.confirm("Have You completed this task?");
    if (confirmation) {
      
      let completeTodos = todos.filter(item => {
        return item.id !== id;
      })
  
    
      
      setTodos(completeTodos); 
      setDone(true);
      setTimeout(() => {
        setDone(false)
      }, 3000)
    }
    }
  const confirmdelete = (e,id) => {
    setOpen(false);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    
    setTodos(newTodos);

  }
  // const handleDelete = (e, id) => {
      
  //   let newTodos = todos.filter(item => {
  //     return item.id !== id;
  //   })
    
  //   setTodos(newTodos);
    
  //     setOpen(true);
    
  // }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index);
    let newTodos = [...todos]
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
                <button onClick={(e) => handleComplete(e,item.id)} className='bg-violet-700 hover:bg-violet-900 text-white font-bold px-4 py-1 rounded-md'>Completed</button>
                <button onClick={()=>{setOpen(true)}} className='bg-violet-700 hover:bg-violet-900 text-white font-bold px-4 py-1 rounded-md'>Delete</button>
              </div>
            </div>
          </div>
        })}
        {open && <Modal_delete onclose={()=>{setOpen(false)}} onconfirmdelete={(e)=>confirmdelete(e,todos[0].id)}/>}

        {done && <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          initialVelocityY={{ min: 10, max: 15 }}
          />}
         
      </div>
    </>
  )
}

export default App
