import React from 'react';
// import './ZigZagGallery.css'; // Import your stylesheet
import dining from '../asset/dining.jpg'
import background from '../asset/background.png'
import bedroom from '../asset/bedroom.jpg'
import explore from '../asset/explore.png'
import item1 from '../asset/item1.png'
import living from '../asset/living.jpg'


const ZigZagGallery = () => {
  

  return (
    <div className="flex flex-wrap p-4">
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
        <img src={dining} alt="Image 1" className="w-full h-auto" />
        <img src={background} alt="Image 2" className="w-full h-auto mt-2" />
        <img src={bedroom} alt="Image 3" className="w-full h-auto mt-2" />
        {/* Remove or add images as needed */}
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 mt-12">
        <img src={explore} alt="Image 4" className="w-full h-auto" />
        <img src={living} alt="Image 5" className="w-full h-auto mt-2" />
        {/* Remove or add images as needed */}
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
        <img src={item1} alt="Image 6" className="w-full h-auto" />
        <img src={dining} alt="Image 7" className="w-full h-auto mt-2" />
        {/* Remove or add images as needed */}
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 mt-5">
        <img src={bedroom} alt="Image 8" className="w-full h-auto" />
        <img src={background} alt="Image 9" className="w-full h-auto mt-2" />
        <img src={living} alt="Image 9" className="w-full h-auto mt-2" />
        {/* Remove or add images as needed */}
      </div>
    </div>
  );
};

export default ZigZagGallery;
