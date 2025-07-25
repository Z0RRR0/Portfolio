import React from 'react'

function First() {
  return (
    <div className='h-screen w-screen bg-slate-900 grid place-content-center'>
      <h1 className='text-yellow-500 text-4xl m-4'>Test</h1>
      <div className=''>
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex item-center space-x-4'>
          <div>
            <img className='m-2.5 h-12 w-14 rounded-lg' src="https://static.wikia.nocookie.net/warner-bros-entertainment/images/2/2d/Sheldon_Cooper.jpg" alt="" />
          </div>
          <div>
            <div className='space-x-2'>
              <h3 className='text-2xl font-medium text-black'>Tailwind CSS</h3>
              <p className='text-slate-500 bg-fuchsia-300 rounded-lg p-1'>By Sheldon Lee Cooper</p>
            </div>
          </div>
        </div>
      </div>

      <button className='bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl hover:bg-amber-200 hover:text-black hover:shadow-xl hover:shadow-black'>Buy now</button>

      <div className="text-center m-4">
        <p className='text-white md:text-green-500 sm:text-red-600'>
          Lorem, ipsum dolor.
        </p>
      </div>

      <div className="mt-3">
        <div className='max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl'>
          <div className='md:flex'>
            <div>
              <img className='h-64 w-full md:h-full md:w-48' src="https://preview.redd.it/so-i-just-thought-of-this-but-leonard-and-sheldon-are-v0-d4ije10en6vc1.jpg?width=1080&crop=smart&auto=webp&s=53415d044d4dc8949c21d6d6549dfe41973967eb" alt="" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>I don't need sleep, I need answers!</div>
              <a className='block mt-1 text-lg font-medium text-black hover:text-blue-700' href="https://www.reddit.com/r/athiest/comments/l4paok/a_statement_by_sheldon_cooper_from_young_sheldon/">
                <span className='bg-yellow-500 p-[2px] px-[10px] rounded-[4px]'>
                  Gravity
                </span>
                , thou art a heartless bitch!</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default First