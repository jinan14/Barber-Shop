

import React from 'react'

function Header() {
    return (
        <header className='flex items-center justify-center w-full h-14 p-3 bg-[#F4E0BB]'>
            <nav className='flex  gap-4 text-[#68513A] font-semibold	md:gap-8'>
                <button className='flex justify-center items-center p-2 rounded-2xl h-8 border-none hover:text-[#F4E0BB] hover:bg-[#68513A]'><a href="#">Home</a></button>
                <button className='flex justify-center items-center p-2 rounded-2xl h-8 border-none hover:text-[#F4E0BB] hover:bg-[#68513A]'><a href="#">About</a></button>
                <button className='flex justify-center items-center p-2 rounded-2xl h-8 border-none hover:text-[#F4E0BB] hover:bg-[#68513A]'><a href="#">Services</a></button>
                <button className='flex justify-center items-center p-2 rounded-2xl h-8 border-none hover:text-[#F4E0BB] hover:bg-[#68513A]'><a href="#">Contact</a></button>
            </nav>

        </header>
    )
}

export default Header