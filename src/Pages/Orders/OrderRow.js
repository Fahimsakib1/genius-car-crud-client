import React, { useEffect, useState } from 'react';
import { ImCancelCircle } from "react-icons/im";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {

    const { name, email, price, phone, serviceName, service, _id, status } = order;

    const [orderService, setOrderService] = useState({});

    // checkout page er moddhe ami jei service er details show korchilam oi khane database er moddhe service er ekta id chilo shei id tai ei page er moddhe useEffect diye data fetch kore service er image gula table er moddhe show korano hoiche.. Service er image er dekhanor jonnoi ei kaj ta kora hoiche. 
    useEffect(() => {
        fetch(`https://genius-car-jwt-token-vercel-deploy-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    

    return (
        <tr>
            <th>
                <label>
                    <ImCancelCircle 
                    onClick={() => handleDelete(_id)}
                    className='text-2xl text-red-500 hover:text-red-800'></ImCancelCircle>
                </label>
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{serviceName}</div>
                        <div className="text-sm text-orange-600 font-semibold">Price: ${price}</div>
                    </div>
                </div>
            </td>

            <td>
                <span className='font-semibold'>{name}</span>
                <br />
                <span className="badge badge-ghost badge-sm">Mobile: {phone}</span>
            </td>
            
            <td>{email}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className={status ? "btn btn-ghost btn-sm text-green-600" : "btn btn-ghost btn-sm text-red-600"}>{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;