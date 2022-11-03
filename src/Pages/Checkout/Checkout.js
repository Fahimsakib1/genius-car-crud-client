import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {

    const { user } = useContext(AuthContext);
    console.log("User From Checkout Page", user)

    const service = useLoaderData();
    //console.log(service);

    const navigate = useNavigate();

    const { description, img, price, title, facility, _id } = service;

    
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const name = `${event.target.firstName.value} ${event.target.lastName.value}`;
        const email = user?.email || 'Unregistered User';
        const phone = event.target.yourPhone.value;
        const message = event.target.message.value;
        //console.log(name, email, phone, message);
        
        const order = {
            service: _id,
            serviceName: title,
            price: price,
            name : name,
            email: email,
            phone: phone,
            message: message
        }

        // if(phone.length < 11){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Incorrect Phone Number',
        //         text: 'Provide Correct Phone Number',
        //     })
        // }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            
            //data er moddhe token na thakle nicher line er moddhe Unauthorized Access kotha ta show korbe r jodi token thake tahole nicher line er moddhe acknowledged: true, show korbe
            console.log(data)
            
            if(data.acknowledged){
                console.log(data)
                Swal.fire(
                    'Good job!',
                    'Order Placed Successfully',
                    'success'
                )
                event.target.reset();
                navigate('/')
            }

            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Order Not Placed',
                    text: 'Something went wrong!'
                })
            }
        })

        .catch(error => console.error(error))

    }
    
    
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl text-blue-800'>You Have Chosen: {title}</h2>
                    <h2 className='text-2xl text-red-600'>Price: ${price}</h2>
                    <img className='mx-auto my-4 rounded-xl ' src={img} alt="" />
                </div>


                <div className='shadow-lg w-3/4 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-12'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full mx-auto" />

                        <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full mx-auto" />

                        <input name="yourPhone" type="text" placeholder="Your Phone Number" className="input input-bordered w-full mx-auto" required/>

                        <input name="email" type="text"
                            defaultValue={user?.email
                            } 
                            readOnly
                            placeholder="Your Email Address" className="input input-bordered w-full mx-auto text-gray-400 font-semibold" />
                    </div>

                    <div>
                        <textarea 
                        name="message"
                        className="textarea textarea-bordered w-full pb-12" placeholder="Description"></textarea>
                    </div>
                </div>

                <button  className="block p-3 text-center rounded-lg text-gray-100 bg-orange-600 mb-36 mt-10 w-1/2 mx-auto">Place Your Order</button>

            </form>

        </div>
    );
};

export default Checkout;