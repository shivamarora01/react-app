import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(5)
  const [num , setNum] = useState(false)
  const [chari , setChari] = useState(false)
  const [passi, setPassi] = useState("")

  const addnum = () => {
    setNum((prev)=> !prev)
  }

  const addchar = () => {
    setChari((prev) => !prev)
  }
  

   const passwordGenerator = useCallback((() => { 
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let pass = ""
    if(num) str += "1234567890"
    if(chari) str += "!@#$%^&*()[]{}"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassi(pass)
  }),[length,setNum,setChari])

  useEffect(
    ()=>{
    passwordGenerator()
  },[length,num,chari,setPassi])

  return (
    <>
    
<form className="mb-5 mr-6 w-full">   
    <label for="search" class="mb-7 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={passi} required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy</button>
    </div>
</form>
<div mb-5>
<label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Length : {length}</label>
<input id="default-range" type="range" value={length} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
  onChange={(e) => {
    setLength(e.target.value)
  }}
/>
</div>
<div class="flex items-center mb-4 mt-4">
    <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    onChange={addnum}/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">character inclusion</label>
</div>
<div class="flex items-center">
    <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    onChange={addchar}/>
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">number inclusion</label>
</div>

    </>
  )
}

export default App
