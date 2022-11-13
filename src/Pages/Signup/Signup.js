import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { setAuthToken } from '../../utilities/auth';
import { motion } from 'framer-motion';



const Signup = () => {


    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');


    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User from sign up page", user);


                //jwt token er jonno auth.js page er moddhe function create kore shei function k use kora holo
                setAuthToken(user)

                // const currentUser = {
                //     email: user?.email
                // }

                // fetch('https://genius-car-jwt-token-vercel-deploy-server.vercel.app/jwt', {

                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })

                // .then(res => res.json())
                // .then(data => {
                //     console.log("Token received from server side in social login token page", data.token)
                //     //local storage is the easiest but not the best place to store jwt token
                //     localStorage.setItem('genius-token', data.token);
                //     navigate(from, { replace: true });
                // })

                Swal.fire(
                    'Good job!',
                    'User Created Successfully',
                    'success'
                )
                setError('')
                event.target.reset();
            })
            .catch(error => {
                setError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Sign Up Failed',
                    text: 'Something went wrong!',
                })
            })
    }


    return (
        <div className="hero mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">

                <motion.div
                    initial={{ opacity: 0, scale: 2.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>

                    <form
                        onSubmit={handleSignUp}
                        className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="Enter Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Enter Password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        {
                            error && <p className='text-red-700'>{error}</p>
                        }

                        <div className="form-control mt-4">
                            <input type="submit" value="Sign Up" className="btn btn-primary bg-orange-600 border-0" />
                        </div>

                    </form>
                    <div className='text-center mb-8'>
                        <p>Already have an account?  <Link to='/login' className='text-orange-400 font-semibold'>Login</Link></p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;