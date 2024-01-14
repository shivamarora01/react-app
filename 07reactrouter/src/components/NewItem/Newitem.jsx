import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {useDispatch} from 'react-redux'
import { additem } from '../../features/itemSlice' 

 function NewItem() {

  const [input,setInput] = useState('')
  const [input2,setInput2] = useState('')
  const [input3,setInput3] = useState('')
  const dispatch = useDispatch()

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(additem({input,input2,input3}))
    setInput('')
    setInput2('')
    setInput3('')
  }

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Post the Lost Or Found item
          </h2>
          <form action="#" method="POST" className="mt-8" onSubmit={addItemHandler} >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  {' '}
                  Item Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Bag,Shoes,Watch etc"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    name = "title"
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Location{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type=""
                    placeholder=""
                    value={input2}
                    onChange={(e)=>setInput2(e.target.value)}
                    id="email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Colour{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type=""
                    placeholder=""
                    id="password"
                    value={input3}
                    onChange={(e)=>setInput3(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Submit Item <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
 export default NewItem