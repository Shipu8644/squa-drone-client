import React from 'react';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <ContactForm></ContactForm>

        </div>
    );
};

export default Home;