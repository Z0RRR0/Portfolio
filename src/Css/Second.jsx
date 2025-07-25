import React from 'react'

function Second() {
  return (
    <div className='h-screen w-screen bg-slate-900 grid place-content-center'>
        <h1 className='text-4xl text-yellow-400 p-6 space-2'>Test</h1>
        <div>
            <div className='bg-white p-3 rounded-xl'>
                <div>
                <img className='rounded-xl m-1' src="https://static.wikia.nocookie.net/warner-bros-entertainment/images/2/2d/Sheldon_Cooper.jpg" alt="" />
            </div>
            <div>
                <h3 className='rounded-xl text-xl font-medium text-black bg-amber-600 p-1 m-1 '>Tailwind CSS</h3>
                <p className='rounded-xl p-1 m-1 bg-blue-300'>By Sheldon Lee Cooper</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Second