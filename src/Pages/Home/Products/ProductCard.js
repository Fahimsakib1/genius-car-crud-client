import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {

    const { id, img, title, price } = product

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl card-compact mb-4 border border-1">
                <figure><img src={img} alt="product" className=' bg-gray-200 rounded-lg'/></figure>
                <div className='text-center flex justify-center align-center mt-2'>
                    <FaStar className='text-amber-500'></FaStar>
                    <FaStar className='text-amber-500'></FaStar>
                    <FaStar className='text-amber-500'></FaStar>
                    <FaStar className='text-amber-500'></FaStar>
                    <FaStar className='text-amber-500'></FaStar>
                </div>
                <div className="card-body">
                    <h2 className="text-xl text-center font-semibold">{title}</h2>
                    <p className='text-orange-600 text-xl text-center font-semibold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;