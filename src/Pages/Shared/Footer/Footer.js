import React from 'react';
import logo from '../../../assets/logo.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-32 bg-black text-white">
                <div>
                    <img src={logo} alt="" />
                    <p>Genius Car<br />Providing car services since 2010</p>
                    <div className='flex justify-center align-center gap-4 text-xl'>
                        <div className='tooltip' data-tip="Facebook" >
                            <FaFacebook className='hover:text-blue-800 tooltip'></FaFacebook>
                        </div>
                        <div className='tooltip' data-tip="Twitter">
                            <FaTwitter className='hover:text-sky-600 tooltip'></FaTwitter>
                        </div>
                        <div className='tooltip' data-tip="LinkedIn">
                            <FaLinkedin className='hover:text-blue-600 tooltip'></FaLinkedin>
                        </div>
                        <div className='tooltip' data-tip="Instagram">
                            <FaInstagramSquare className='hover:text-pink-600 tooltip'></FaInstagramSquare>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;