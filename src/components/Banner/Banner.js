import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import "./Banner.css";

const Banner = () => {
    return (
        <>
         <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption className="cap-position">
                <h1>BUILD <span className="span-color">YOUR</span> BODY <span className="span-color">STRONG</span></h1>
                <p>Trust the professionals to take care of your body </p>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption className="cap-position">
                <h1>BUILD <span className="span-color">YOUR</span> BODY <span className="span-color">STRONG</span></h1>
                <p>Ready to change your physique, but can't work out in the gym?</p>
               
                </Carousel.Caption>
            </Carousel.Item>
 
</Carousel>   
        </>
    );
};

export default Banner;