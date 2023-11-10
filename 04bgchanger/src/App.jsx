import { useState } from 'react'
import './App.css'

export default function App() {
  const [clr , setClr] = useState("white");
  return (
      <div className='w-full h-screen'
      style={{backgroundColor: clr}}
      >     
       <div className='flex flex-wrap justify-center px-3 py-20'>
       <button
  onClick={() => 
    setClr("black")
  }
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Black
  </button>
  <br></br>
  <button
  onClick={() => 
    setClr("yellow")
  }
    type="button"
    class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Yellow
  </button>
  <br></br>
  <button
  onClick={() => 
    setClr("red")
  }
    type="button"
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Red
  </button>
  <br></br>
  <button
  onClick={() => 
    setClr("green")
  }
    type="button"
    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Green
  </button>
  <br></br>
  <button
  onClick={() => 
    setClr("blue")
  }
    type="button"
    class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Blue
  </button>
  <br></br>
  <button
  onClick={() => 
    setClr("violet")
  }
    type="button"
    class="rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Violet
  </button>
  <br></br>
       </div>
      </div>
  )
}