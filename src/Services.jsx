import React, { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Services() {
    const images = ['/services1.png', '/services2.png']; // Correct image paths
    const [imageIndex, setImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const moveLeft = () => {
        setFade(true);
        setTimeout(() => {
            setImageIndex((prevIndex) => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setFade(false);
        }, 300); // Duration of fade-out animation
    };

    const moveRight = () => {
        setFade(true);
        setTimeout(() => {
            setImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 300);
    };

    return (
        <div className='flex flex-col p-14 gap-10 items-center justify-center'>
            <h1 className='font-bold text-[#68513A] text-3xl text-center md:text-5xl'>Our Services</h1>
            <div className='flex gap-11 items-center justify-center w-full md:w-11/12'>
                <button 
                    className='w-8 h-8 rounded-full bg-[#68513A] text-[#F4E0BB] flex items-center justify-center hover:text-[#68513A] hover:bg-[#F4E0BB] hover:border-solid border-2 border-[#68513A]' 
                    onClick={moveLeft}
                >
                    <GoArrowLeft />
                </button>

                <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'} `}>
                    <img src={images[imageIndex]} alt="" className='transition-transform duration-300' />
                </div>

                <button 
                    className='w-8 h-8 rounded-full bg-[#68513A] text-[#F4E0BB] flex items-center justify-center hover:text-[#68513A] hover:bg-[#F4E0BB] hover:border-solid border-2 border-[#68513A]' 
                    onClick={moveRight}
                >
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Services;
