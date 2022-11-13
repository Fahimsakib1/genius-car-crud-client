import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <div>
            <div className="hero my-24">
                <div className="hero-content flex-col lg:flex-row">

                    <motion.div
                        initial={{ opacity: 0, scale: -0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}

                        className='w-1/2 relative'>

                        <img src={person} className=" 
                        w-4/5 h-full 
                        rounded-lg shadow-2xl" alt="" />

                        <img src={parts} className=" rounded-lg shadow-2xl absolute w-3/5 right-5 top-1/4 border-8" alt="" />

                    </motion.div>

                    <div className='w-1/2'>
                        <p className='text-2xl text-orange-600 font-bold my-5'>About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified
                            <br></br>
                            & of experience <br></br>
                            in this field</h1>

                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>

                        <p className="pb-6">
                            the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                        </p>

                        <button className="btn  btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;