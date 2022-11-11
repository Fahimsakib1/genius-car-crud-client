import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLoginToken = () => {

    const { googleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log("User From Social Login Token Page", user);

                const currentUser = {
                    email: user?.email
                }

                fetch('https://genius-car-jwt-token-vercel-deploy-server.vercel.app/jwt', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                .then(res => res.json())
                .then(data => {
                    console.log("Token received from server side in social login token page", data.token)

                    //local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('genius-token', data.token);
                    navigate(from, { replace: true });
                })

                

                Swal.fire(
                    'Good job!',
                    'Google Login Successful',
                    'success'
                )
            })


            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Google Login Failed',
                    text: 'Something went wrong!',
                })
            })
    }



    return (
        <div className='mb-4'>
            <h1 className='text-center text-lg text-blue-800'>Social Login</h1>

            <p className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-ghost text-3xl'><FcGoogle></FcGoogle></button>
            </p>
        </div>
    );
};

export default SocialLoginToken;