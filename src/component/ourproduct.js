import React from 'react';
import ItemCart from '../component/itemcart'; // Assuming you have the ItemCart component

function OurProduct() {
  return (
    <div className="relative w-full md:w-[1236px] mx-auto mt-8 p-4">
      <div className="w-full md:w-[269px] h-[48px] border-1 border-gray-500 bg-gray-200 mb-4 mx-auto">
        <h1 className='flex items-center justify-center h-full'>Our Products</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
        {/* Render 4 ItemCart components in the upper row */}
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full space-y-4 md:space-y-0 md:space-x-4 pt-5">
        {/* Render 4 ItemCart components in the lower row */}
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Show More</button>
      </div>
    </div>
  );
}

export default OurProduct;
