import React from 'react';
import bedroom from '../asset/bedroom.jpg';
import dining from '../asset/dining.jpg';
import living from '../asset/living.jpg';

const CategoryCard = () => {
  const containerStyle = 'flex justify-center space-x-12 ';
  const imageStyle = 'w-full h-full object-fill rounded-xl';
  const textContainerStyle = 'text-center mt-2'; // Adjusted margin-top for spacing

  return (
    <div className='max-w-[1300px] mx-auto h-full ' >
      <h2 className='mt-5 pb-5 text-3xl'>Browse the Range</h2>
      <div className={containerStyle}>
        <div className="relative">
          <img src={bedroom} alt='Bedroom' className={imageStyle} />
          <p className={textContainerStyle}>Bedroom</p>
        </div>
        <div className="relative">
          <img src={dining} alt='Dining' className={imageStyle} />
          <p className={textContainerStyle}>Dining</p>
        </div>
        <div className="relative">
          <img src={living} alt='Living' className={imageStyle} />
          <p className={textContainerStyle}>Living</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
