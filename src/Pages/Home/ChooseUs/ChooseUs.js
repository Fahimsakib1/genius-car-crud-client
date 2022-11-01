import React from 'react';
import { BsPeopleFill, BsClock } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';
import { FaTools, FaShippingFast } from 'react-icons/fa';
import { ImShield } from 'react-icons/im';

const ChooseUs = () => {
    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-2xl font-bold text-orange-600 '>Core Features</p>
                <h2 className='text-5xl font-semibold'>Why Choose Us?</h2>
                <div className='w-1/2 mx-auto mt-2'>
                    <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.  </p>
                </div>
            </div>

            <div className='flex justify-around align-center my-8 flex-col sm:flex-col lg:flex-row md:flex-row'>
                
                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <BsPeopleFill className='text-4xl mx-auto mb-1 text-orange-600'></BsPeopleFill>
                    <h2 className='text-xl font-semibold text-center'>Expert Team</h2>
                </div>

                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <BsClock className='text-4xl mx-auto mb-1 text-orange-600 font-bold'></BsClock>
                    <h2 className='text-xl font-semibold text-center'>Timely Delivery</h2>
                </div>

                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <MdSupportAgent className='text-4xl mx-auto mb-1 text-orange-600'></MdSupportAgent>
                    <h2 className='text-xl font-semibold text-center'>24/7 Support</h2>
                </div>

                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <FaTools className='text-4xl mx-auto mb-1 text-orange-600'></FaTools>
                    <h2 className='text-xl font-semibold text-center'>Best Equipment</h2>
                </div>

                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <ImShield className='text-4xl mx-auto mb-1 text-orange-600'></ImShield>
                    <h2 className='text-xl font-semibold text-center'>100% Guaranty</h2>
                </div>

                <div className='border-2 border-gray-400 p-4 rounded-lg hover:bg-blue-900 hover:text-white hover:cursor-pointer mb-6 sm:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto lg:mr-6'>
                    <FaShippingFast className='text-4xl mx-auto mb-1 text-orange-600'></FaShippingFast>
                    <h2 className='text-xl font-semibold text-center'>Timely Delivery</h2>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;