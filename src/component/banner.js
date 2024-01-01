import React from 'react';
import background from '../asset/background.png';

function Banner() {
  return (
    <div className='relative mx-5 overflow-hidden h-64 md:h-96 lg:h-80 xl:h-96'>
      <img src={background} className='w-full h-full object-bottom'  alt='banner ' />

      {/* Overlay with Content */}
      <div className='absolute inset-0 flex items-center justify-end px-10'>
        <div className='bg-orange-300 bg-opacity-70 p-2 md:p-4 text-white text-center md:text-left h-48 md:h-64'>
          <p className='text-sm md:text-lg lg:text-lg xl:text-xl block mb-2 text-black'>
            New Arrival
          </p>
          <div>
            <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-orange-600'>
              Discover Our
            </h1>
            <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-orange-600'>
              New Collection
            </h1>
          </div>
          <p className='text-sm md:text-base lg:text-lg xl:text-xl mb-2 text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className='bg-white text-orange-600  px-3 md:px-4 py-2 rounded-full hover:bg-orange-400 hover:text-white'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
