import React, { useEffect, useState } from 'react';

function Hero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay to trigger the fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='Home' className='h-screen flex flex-col items-center justify-center'>
      <div
        className="bg-cover bg-no-repeat h-full w-full flex flex-col justify-center items-center gap-11 relative"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        <div className={`flex flex-col justify-center items-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <p className='font-bold text-[#F4E0BB] text-lg md:text-xl'>Your Style, Our Passion!</p>
          <h1 className='font-bold text-[#F4E0BB] text-4xl md:text-6xl lg:text-8xl'>Hairs Beauty Center</h1>
        </div>
        <button
          className={`w-32 md:w-40 h-12 md:h-14 bg-[#F4E0BB] text-[#68513A] rounded-lg font-bold transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          Book Now
        </button>
      </div>
      <img
        className={`absolute top-[104vh] w-[80%] md:w-[60%] transform transition-transform duration-1000 ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        src="public/opening-time.png"
        alt="Opening Time"
      />
    </div>
  );
}

export default Hero;
