import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import "./service.css";

const Service = () => {
    const {serviceId}= useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://animfahad32.github.io/fakeData/gymservices.json')
        .then(res=> res.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.find(td => td.id===serviceId);
    
    return (
        <div>
              <div className="page-title mt-5">
                <h1>Service</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/Service</NavLink>
            </div>
            <div className="container">
                <img src={exactItem?.img} className="mt-5 w-100" alt="" />
            <h1 className="mt-5 service-head">{exactItem?.name}</h1>
            <p className="service-des">{exactItem?.desc}</p>
            <button className="btn-style">Enroll Now</button>

            </div>
        </div>
    );
};

export default Service;