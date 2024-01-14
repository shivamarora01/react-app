import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [validNum , setValidNum] = useState(false)
  const [validChar , setValidChar] = useState(false)
  const [passie , setPassie] = useState("")

  //usecallback ka kaam bass optimization ka h
  //ki catch m store krlo last updation ko

  const passwordGenerator = useCallback((
    ()=>{
      let pass = ""
      let str = "QWERTYUIOPASDFGHJKLMNBVCXZzxcvbnmasdfghjklqwertyuiop"
      if(validChar) str += "!@#$%^&*()[]{}?/|"
      if(validNum) str += "0987654321"
      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }
      setPassie(pass)
    }
  ),[length,validNum,validChar])

  //useEffect btata hai ki kin kin k changes se password dobraa dobara generate hoga
  //jo array mai hai unke updation se

  useEffect(()=>{
    passwordGenerator()
  },[length,validNum,validChar])


  return (
    <>
    <div class="relative w-full bg-white">
  <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
      <div class="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
        <div class="rounded-full bg-white p-1 px-2">
        </div>
      </div>
      <h1 class="mt-8 mb-3 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        Password Generator
      </h1>
      <div>
          <input
            class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder={passie}
            id="email"
          />
          <p class="mt-2 text-sm text-gray-500"></p>
        </div>
        <div>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Copy
          </button>
        </div>
      <form action="" class="mt-8 flex items-start space-x-2">
        <div>
          <input
            class="flex w-full rounded-md border  px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="checkbox"
            placeholder="Enter your email"
            id="email"
            onChange={()=>{
              setValidNum((prev)=> !prev)
            }}
          />
        </div>
        <div>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Numbers
          </button>
        </div>
        <div>
          <input
            class="flex w-full rounded-md border  px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="checkbox"
            placeholder="Enter your email"
            id="email"
            onChange={()=>{
              setValidChar((prev)=> !prev)
            }}
          />
        </div>
        <div>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Characters
          </button>
        </div>
        <div>
          <input
            class="flex w-full rounded-md border  px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="range"
            placeholder="Enter your email"
            id="email"
            min={5}
            max={20}
            value={length}
            onChange={(e)=>
               {setLength(e.target.value)}
            }
          />
        </div>
        <div>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
           Length : {length}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default App


