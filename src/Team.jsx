

import React from 'react'

function Team() {
  return (
    <div className='flex flex-col p-14 gap-11 bg-[#68513A] items-center justify-center'>
        <h1 className='font-bold text-[#F4E0BB] text-3xl  md:text-5xl'>Meet The Team</h1>
        <div className='w-full md:w-11/12'>
            <img src="public/team.png" alt="" />
        </div>
    </div>
  )
}

export default Team