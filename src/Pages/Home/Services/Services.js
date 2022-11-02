import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-2xl font-bold text-orange-600 '>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <div className='w-1/2 mx-auto mt-2'>
                    <p className='text-lg'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className='mx-auto mb-16 w-3/4 text-center'>
                <button className="btn btn-outline btn-primary ">More Services</button>
            </div>


        </div>
    );
};

export default Services;