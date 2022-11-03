import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import Swal from 'sweetalert2';

const Orders = () => {

    const { user, logoutUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]); //useState({}) ei vabe dile thik moto kaj kore na 

    // console.log("User From Order Page", user)
    // console.log("User Email From Order Page:", user?.email)

    
    // jehetu amra kono id parameter diye data load kortechi na borong kono ekta user er email diye tar order kora product gula show korabo shei jonno amra routes.js file er moddhe loader use korlam na.. ei jonno ei page er moddhe use effect diye oi email er jonno order gula load korbo. tai useEfect use kora hoiche


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403 ){
                    return logoutUser();
                }
                return res.json()
            })
            .then(data => {
                console.log("Data inside order page in client side", data)
                setOrders(data)
            })
    }, [user?.email, logoutUser])

    

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel this order");
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Great!',
                        'Item Deleted',
                        'success'
                    )
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }

                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Order Deleting failed',
                        text: 'Something went wrong!',
                    })
                }
            })
        }
    }



    const handleStatusUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },

            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                
                //status ta update korar jonno ei code gula likha hoiche
                
                //filter korle akta array return hoy
                const remainingIds = orders.filter(odr => odr._id !== id);

                //find korle akta object return hoy
                const approvingId = orders.find(odr => odr._id === id)
                
                //jehetu find korle akta object return hoy taai approvingId.status ='Approved' ei vabe set kora holo
                approvingId.status = 'Approved';
                
                //jehetu filter korle akta array return hoy taai newOrders = [...orders, approvingId] ei vabe set kora holo
                const newOrders = [approvingId, ...remainingIds];
                setOrders(newOrders);
            }
        })
    }



    return (
        <div>
            <div>
                <h2 className='text-center text-3xl text-red-600 font-semibold my-8'>{user?.email} You have total {orders.length} Orders </h2>
            </div>

            <div>
                <div className="overflow-x-auto w-full mb-24">
                    <table className="table w-full">
                        
                        <thead>
                            <tr>
                                <th className='text-red-600'>Delete</th>
                                <th>Service Details</th>
                                <th>Customer Details</th>
                                <th>Message</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderRow key={order._id} order={order} handleDelete ={handleDelete} 
                                handleStatusUpdate={handleStatusUpdate}
                                ></OrderRow>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Orders;