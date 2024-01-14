import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'

export function CardTwo() {

    const [num,validnum] = useState(false)
    let [numbtn,setnumbtn] = useState("Number ON")
    const [sym , validsym] = useState(false)
    const [BigChar ,validBigChar] = useState(false)
    const [passie,setPassie] = useState("")
    const [bgdecide,setbgdecide] = useState("bg-red")

    const passwordref = useRef(null)
    const copytoclip = useCallback(()=>{
        window.navigator.clipboard.writeText(passie)
    },[passie])

    const passwordGen=()=>{
        let pass = ""
        let str = "qwertyuiopasdfghjklzxcvbnm"
        if(BigChar) str += "QWERTYUIOPASDFGHJKLZXCVBNM"
        if(num) setnumbtn("Number OFF")
        else setnumbtn("Number ON")
        if(num) str += "1234567890"
        if(sym) str += "!@#$%&*" 
        for(let i = 0; i < 8; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }
        setPassie(pass)
    }

    useEffect(()=>{
        passwordGen()},[num,BigChar,sym]
    )


  return (
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{passie}</h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
        onClick={()=>{
            validnum((prev)=>!prev)}
        }
          type="button"
          className="mt-4 ml-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {numbtn}
        </button>
        <button
        onClick={()=>{
            validBigChar((prev)=>!prev)}
        }
          type="button"
          className="mt-4 ml-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Big Charcters
        </button>
        <button
        onClick={()=>{
            validsym((prev)=>!prev)}
        }
          type="button"
          className="mt-4 ml-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Symbols
        </button>
        <button
        onClick={copytoclip}
          type="button"
          className="mt-4 ml-4 rounded-sm bg-blue-900 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Copy To Clipboard
        </button>
      </div>
    </div>
  )
}
