import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Address></Address>
            <Products></Products>
            <Teams></Teams>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;