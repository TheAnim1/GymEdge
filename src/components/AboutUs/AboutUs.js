import React from 'react';
import { NavLink } from 'react-router-dom';
import about from "../../images/about.jpg";
import advantage1 from "../../images/advantage1.jpg";
import advantage2 from "../../images/advantage2.jpg";
import advantage3 from "../../images/advantage3.jpg";
import advantage4 from "../../images/advantage4.jpg";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div>
            <div className="page-title mt-5">
                <h1>About Us</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/About-Us</NavLink>
            </div>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={about} alt="" className="w-100" />
                </div>
                <div className="col-md-6">
                    <div className="bottom">
                    <h1>About Us</h1>
                    
                     </div>
                     <div className="about-content">
                     <p className="text-start about-p">Your body is designed to move with purpose. We can help you go further with the right balance of training and motivation. Combine our fully equipped gyms with specialised exercise techniques, to explore new ways to challenge yourself. Your well-being is about more than muscle tone. Our expert team can also advise on the right nutritional balance and the best ways to stay active outside the club to help you go further in life.
                    </p>
                    <p className="text-start about-p">See our class timetable for details. Shape your body and burn fat with strength training. With the right equipment such as free weights or resistance machines and advice from our experts.</p>
                    <p className="text-start about-p"><i className="fas fa-check tick-red"></i> Quality simulators</p>
                    <p className="text-start about-p"><i className="fas fa-check tick-red"></i> Coaching champions</p>
                    <p className="text-start about-p"><i className="fas fa-check tick-red"></i> Individual approach</p>
                    <p className="text-start about-p"><i className="fas fa-check tick-red"></i> Sport cafe</p>
                     </div>
                </div>
            </div>
            </div>

            <div className="container">
                    <div className="bottom">
                         <h1>Advantages</h1>
                    
                     </div>
                     <div className="row mt-5">
                         <div className="col-md-3">
                             <img src={advantage1} className="w-25" alt="" />
                             <h2 className="mt-3 advantage-heading">658 +</h2>
                             <p className="advantage-text">HAPPY CUTOMERS</p>
                         </div>
                         <div className="col-md-3">
                             <img src={advantage2} className="w-25" alt="" />
                             <h2 className="mt-3 advantage-heading">1734 +</h2>
                             <p className="advantage-text">DEVELOPED TRAINING</p>
                         </div>
                         <div className="col-md-3">
                             <img src={advantage3} className="w-25" alt="" />
                             <h2 className="mt-3 advantage-heading">86 +</h2>
                             <p className="advantage-text">AWARDS</p>
                         </div>
                         <div className="col-md-3">
                             <img src={advantage4} className="w-25" alt="" />
                             <h2 className="mt-3 advantage-heading">105 +</h2>
                             <p className="advantage-text">QUALITY EQUIPMENT</p>
                         </div>
                     </div>
            </div>
        </div>
    );
};

export default AboutUs;