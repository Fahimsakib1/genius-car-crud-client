import React from 'react';
import { FaArrowRight } from "react-icons/fa";




const ServiceCard = ({ service }) => {

    const { title, price, img } = service;

    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-12">
                <figure><img src={img} alt="service" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions">
                        <p className='text-orange-600 text-xl'>Price: ${price}</p>
                        <FaArrowRight className='text-orange-600 mt-2'></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;