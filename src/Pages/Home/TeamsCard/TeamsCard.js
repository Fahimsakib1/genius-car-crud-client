import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const TeamsCard = ({ team }) => {

    const { id, img, title, designation } = team;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-12">
                <figure><img src={img} alt="service" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl text-center font-semibold">{title}</h2>
                    <div className="card-actions">
                        <p className='text-gray-500 text-xl text-center'>{designation}</p>
                    </div>
                    <div className='flex justify-center align-center gap-4 text-3xl'>
                        <div className='tooltip' data-tip="Facebook">
                            <FaFacebook className='text-blue-800 tooltip'></FaFacebook>
                        </div>
                        <div className='tooltip' data-tip="Twitter">
                            <FaTwitter className='text-sky-600 tooltip'></FaTwitter>
                        </div>
                        <div className='tooltip' data-tip="LinkedIn">
                            <FaLinkedin className='text-blue-600 tooltip'></FaLinkedin>
                        </div>
                        <div className='tooltip' data-tip="Instagram">
                            <FaInstagramSquare className='text-pink-600 tooltip'></FaInstagramSquare>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamsCard;