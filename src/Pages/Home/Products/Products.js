import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='text-center my-16'>
                <p className='text-2xl font-bold text-orange-600 '>Popular Products</p>
                <h2 className='text-5xl font-semibold'>Browse Our Products</h2>
                <div className='w-1/2 mx-auto mt-2'>
                    <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.  </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4'>
                {
                    products.map(product => <ProductCard key ={product.id} product={product}></ProductCard>)
                }
            </div>


            <div className='mx-auto mb-16 w-3/4 text-center mt-16'>
                <button className="btn btn-outline btn-primary ">More Products</button>
            </div>
        </div>
    );
};

export default Products;