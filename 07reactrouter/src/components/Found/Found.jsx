import React from 'react'
import { useSelector } from 'react-redux'


function Found() {
  const items = useSelector(state => state.items)
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {items.map((card) => (
        <div key={card.id} className="rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{card.text}</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4">
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Location : </span>
              <span >{card.location}</span>
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Colour : </span>
              <span>{card.colour}</span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Claim item
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Found
