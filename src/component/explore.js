import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import explore from '../asset/explore.png';

function Explore() {
  // Sample carousel items (replace with your own data)
  const carouselItems = [
    { id: 1, image: explore },
    { id: 2, image: explore },
    { id: 3, image: explore },
    { id: 4, image: explore },
    // Add more items as needed
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="max-w-[1200px] mx-auto  flex-shrink-0 bg-[#FCF8F3] flex">
      {/* Left half */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-4 md:pl-12 mb-8">
        <div className="w-full md:w-[422px] flex-shrink-0 items-start justify-start">
          <h1 className="text-[#3A3A3A] font-poppins font-bold text-3xl md:text-4xl leading-[120%] text-start mb-2">
            50+ Beautiful rooms <br />
            inspiration
          </h1>
          <p className="text-[#616161] font-poppins font-medium text-base md:text-lg leading-[150%] text-start">
            Our designers have already created many <br />
            beautiful room prototypes that will inspire you.
          </p>
        </div>
        {/* Button */}
        <div className="w-[176px] md:w-[176px] h-[48px] flex-shrink-0 bg-[#B88E2F] flex items-center justify-center mt-4">
          <div className="text-[#FFF] font-poppins font-semibold text-base md:text-lg leading-[150%]">
            Explore More
          </div>
        </div>
      </div>

      {/* Right half - Carousel */}
      <div className='w-full  flex space-x-10 '>
        <div className='w-full md:w-[404px] max-h-full py-5 '>
          <img src={explore} alt='explore'/>
        </div>
      <div className='w-full md:w-[404px] h-10 mt-10 '>
        <Slider {...carouselSettings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full max-h-[450px]  object-cover overflow-hidden">
              <img src={item.image} alt={`carousel-${item.id}`} className="w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
}

export default Explore;
