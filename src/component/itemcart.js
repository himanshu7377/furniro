import React from 'react';
import item1 from '../asset/item1.png';

function ItemCart() {
  return (
    <div className="relative w-[285px] h-[446px] border rounded-md overflow-hidden shadow-md">
      <div className="absolute top-0 left-0 w-full h-[75%] overflow-hidden">
        {/* Your image goes here */}
        <img src={item1} alt='item 1' className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 p-2 bg-green-500 text-white font-bold rounded-bl-md">
        60% OFF
      </div>
      <div className="absolute bottom-0 left-0 p-4 flex flex-col justify-center items-start h-[25%] bg-white bg-opacity-80">
        <h3 className="text-lg font-bold mb-1">Product Name</h3>
        <p className="text-sm text-gray-500 mb-2">One line description</p>
        <p className="text-lg font-bold text-green-500">$99.99</p>
      </div>
      <button className="absolute bottom-0 right-0 p-4 bg-blue-500 text-white font-bold rounded-tl-md">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCart;
