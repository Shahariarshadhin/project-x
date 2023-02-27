import React from 'react';
import Card from './Card/Card';

const Home = () => {
    return (
        <div className='lg:px-36 mt-12 mb-10'>
            <h1 className='font-Heebo font-bold text-5xl text-[#DA2348]   text-center' >We are Offering Best Features</h1>
            <p className='font-Heebo font-normal text-lg text-center mt-3 text-black'>BlueLight Health Envisions a World Where Living a Healthy<br></br>
                Lifestyle Comes Naturally. You, as Part of Bluelight</p>

            <Card></Card>
        </div>
    );
};

export default Home;