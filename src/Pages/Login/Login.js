import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLoginToken from '../Shared/SocialLoginToken/SocialLoginToken';
import { motion } from 'framer-motion';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    //login korar por jei page e redirect korbo tar code 
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User from Login page", user);

                const currentUser = {
                    email: user?.email
                }

                console.log("User Email from Login page", user.email);


                //get jwt token in client side
                fetch('https://genius-car-jwt-token-vercel-deploy-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Token received from server side", data.token)

                        //local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    })


                Swal.fire(
                    'Good job!',
                    'Login Successful',
                    'success'
                )
                setError('');
                event.target.reset();
            })


            .catch(error => {
                setError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Login Failed',
                    text: 'Something went wrong!',
                })
            })
    }


    return (
        <div className="hero mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse grid md:grid-cols-2 gap-24">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 2.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center">Login</h1>

                    <form
                        onSubmit={handleLogin}
                        className="card-body">
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

                        <div>
                            {error && <p className='text-red-600'>{error}</p>}
                        </div>

                        <div className="form-control mt-4">
                            <input type="submit" value="Login" className="btn btn-primary bg-orange-600 border-0" />
                        </div>

                    </form>
                    <div className='text-center mb-8'>
                        <p>New to Genius Car?  <Link to='/signup' className='text-orange-400 font-semibold'>Sign Up</Link></p>
                    </div>

                    <div>
                        <SocialLoginToken></SocialLoginToken>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;