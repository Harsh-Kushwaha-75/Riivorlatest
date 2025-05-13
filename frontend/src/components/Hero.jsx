import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: assets.hero_img, animation: 'opacity-100', id: 0 },
    { src: assets.hero_img2, animation: 'translate-x-0', id: 1 },
    { src: assets.hero_img3, animation: 'translate-x-0', id: 2 }, 
    { src: assets.hero_img4, animation: 'scale-100', id: 3 },
    { src: assets.hero_img5, animation: 'rotate-0', id: 4 },
    { src: assets.hero_img6, animation: 'translate-y-0', id: 5 }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Manual navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='relative w-full h-[600px] overflow-hidden'>
        {/* Background Images */}
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            src={image.src}
            alt=""
          />
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20'
        >
          ❮
        </button>
        <button 
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20'
        >
          ❯
        </button>

        {/* Dot indicators */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>

        {/* Overlay Content */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center z-10'>
            <div className='flex items-center justify-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-white'></p>
              <p className='font-medium text-sm md:text-base'>WELCOME TO RIIVOR</p>
              <p className='w-8 md:w-11 h-[2px] bg-white'></p>
            </div>
            
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
              UPLIFT YOUR FASHION
            </h1>
            
            <div className='flex items-center justify-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-white'></p>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[2px] bg-white'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero