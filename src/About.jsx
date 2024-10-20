import React from 'react';

function About() {
  return (
    <div id='About' className='flex flex-col md:flex-row p-5 md:p-10 gap-6 md:gap-11 mt-36 h-auto md:h-[100vh]'>
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <img className='w-full max-w-md md:max-w-lg' src="public/About.png" alt="About Us" />
      </div>
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 gap-6'>
        <h1 className='font-bold text-[#68513A] text-4xl md:text-5xl text-center mb-7'>
          Transforming You, One Strand at a Time!
        </h1>
        <p className='font-semibold text-[#68513A] text-lg md:text-3xl text-center'>
          Our salon is designed exclusively for women, offering a range of personalized hair services that cater to your unique style and personality. From precision cuts to vibrant color transformations, our skilled stylists are dedicated to making you look and feel your best.
        </p>
      </div>
    </div>
  );
}

export default About;
