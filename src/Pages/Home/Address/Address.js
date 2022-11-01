import React from 'react';
import { SlCalender } from "react-icons/sl";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Address = () => {
    return (
        <div>
            <div className='bg-black  mx-auto flex justify-around align-center text-white py-20 rounded-lg'>

                <div className='flex align-center justify-center gap-4'> 
                    <div className='text-3xl my-auto'>
                        <SlCalender className='text-red-600'></SlCalender>
                    </div>

                    <div>
                        <p>We are open  <span className='text-orange-600'>MONDAY - FRIDAY</span></p>
                        <h2 className='text-3xl font-semibold'>7.00 am to 9.00 pm</h2>
                    </div>
                </div>

                <div className='flex align-center justify-center gap-4'>
                    <div className='text-3xl my-auto'>
                        <BsFillTelephoneFill className='text-red-600'></BsFillTelephoneFill>
                    </div>

                    <div>
                        <p>Have a question?</p>
                        <h2 className='text-3xl font-semibold'>+2546  251 2658</h2>
                    </div>
                </div>

                <div className='flex align-center justify-center gap-4'>
                    <div className='text-3xl my-auto'>
                        <FaMapMarkerAlt className='text-red-600'></FaMapMarkerAlt>
                    </div>

                    <div>
                        <p>Need a Repair?</p>
                        <h2 className='text-3xl font-semibold'>Liza Street, New York</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Address;