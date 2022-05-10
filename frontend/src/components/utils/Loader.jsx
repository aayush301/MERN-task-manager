import React from 'react'

const Loader = () => {
  return (
    <>
      <div className='w-8 h-8 my-8 mx-auto'>
        <div className="w-full h-full rounded-full border-[3px] border-indigo-600 border-b-transparent animate-loader"></div>
      </div>
    </>
  )
}

export default Loader