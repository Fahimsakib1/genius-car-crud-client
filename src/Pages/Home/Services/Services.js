import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';




const Services = () => {

    const [services, setServices] = useState([]);

    const [isAsc, setIsAsc] = useState(true);

    const [search, setSearch] = useState('');

    const searchRef = useRef();

    useEffect(() => {
        fetch(`https://genius-car-jwt-token-vercel-deploy-server.vercel.app/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.length);
                setServices(data)
            })
    }, [isAsc, search])


    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value);

    }


    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-2xl font-bold text-orange-600 '>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <div className='w-1/2 mx-auto mt-2'>
                    <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                </div>

                
                {/* Sort the services by Ascending or descending order with input select box*/}
                <div className='flex justify-center items-center'>
                    <div>
                        <label className="mr-3 bg-purple-800 py-3 rounded-md px-3 text-white">
                            <span className='text-lg'>Filter By Price</span>
                        </label>
                    </div>

                    <select onChange={() => setIsAsc(!isAsc)} className="select select-bordered w-full max-w-xs my-8">
                        <option className='text-lg' value="Low To High">Low To High</option>
                        <option className='text-lg' value='High To Low'>High To Low</option>
                    </select>
                </div>

                {/* Sort the services by Ascending or descending order by button toggle*/}
                {/* <div>
                    <button onClick={() => setIsAsc(!isAsc)} className='btn btn-primary btn-outline mt-4 px-8'>{isAsc ? 'Filter By High to Low' : 'Filter By Low to High'}</button>
                </div> */}

                {/* Search services by name */}
                <div className='mt-4'>
                    <input ref={searchRef} type="text" placeholder="Search By Service Name" className="input input-bordered input-primary w-full max-w-xs" />

                    <button onClick={handleSearch} className="btn btn-primary ml-2 px-6">Search</button>
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            {/* {
                data.length === 0 && <h1 className='text-2xl'> No Services Found</h1>
            } */}

            <div className='mx-auto mb-16 w-3/4 text-center'>
                <button className="btn btn-outline btn-primary ">More Services</button>
            </div>


        </div>
    );
};

export default Services;