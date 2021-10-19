import React from 'react';
import Banner from '../Banner/Banner';
import BmiCalculator from '../BmiCalculator/BmiCalculator';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <>
         <Banner></Banner>   
         <Services></Services>
         <BmiCalculator></BmiCalculator>
         <Trainers></Trainers>
         <Pricing></Pricing>
      
         
        </>
    );
};

export default Home;