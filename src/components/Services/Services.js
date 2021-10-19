import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://animfahad32.github.io/fakeData/gymservices.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-5" id="services">
           <div className="bottom">
                <h1>Our Services</h1>
            </div>
           <div className="container">
           <div className="row row-cols-1 row-cols-md-3 g-4">
           {
               services.map((service) => 
               
             
                 <div key ={service?.id} className="card-group">
               <div className="card">
                 <img src={service?.img}className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title title-color">{service?.name}</h5>
                   <p className="card-text">{service?.desc}</p>
                  
                 </div>
                 <NavLink to={`/service/${service?.id}`}>
                 <button className="btn-style">Enroll Now</button>
                 </NavLink>
               </div>
               
             </div>
              
               )
           }
           </div>
           </div>
         
        </div>
    );
};

export default Services;