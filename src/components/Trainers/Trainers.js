import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Trainer.css';



const Trainers = () => {
    return (
        <div className="mt-5" id="trainers">
              <div className="bottom">
                <h1>Our Trainers</h1>
            </div>
        <div className="container">
            <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/QjdMyV5/trainer1.jpg" className="w-100" alt="" />
               <div className="trainer-info">
               <h3 className="trainer-name">Jennifer Alex</h3>
                <h5 className="trainer-desc">Yoga Trainer</h5>
               </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src="https://i.ibb.co/L5pCCkZ/trainer2.jpg" className="w-100"  alt="" />
               <div className="trainer-info">
               <h3 className="trainer-name">Jacke deoke</h3>
                <h5 className="trainer-desc">Fitness Trainer</h5>
               </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>

            <div>
                    <img src="https://i.ibb.co/hsRjmkg/trainer3.jpg" className="w-100"  alt="" />
                <div className="trainer-info">
                <h3 className="trainer-name">Ellie Watson</h3>
                    <h5 className="trainer-desc">Boxing Trainer</h5>
                </div>
                    
                </div>
        </SwiperSlide>
        <SwiperSlide>
                 <div>
                        <img src="https://i.ibb.co/NLZspm3/trainer4.jpg" className="w-100"  alt="" />
                    <div className="trainer-info">
                    <h3 className="trainer-name">David Smith</h3>
                        <h5 className="trainer-desc">Boxing Trainer</h5>
                    </div>
                    
                </div>

        </SwiperSlide>
        
        <SwiperSlide>
                 <div>
                        <img src="https://i.ibb.co/9rg1ZMC/trainer5.jpg" className="w-100"  alt="" />
                    <div className="trainer-info">
                    <h3 className="trainer-name">John Doe</h3>
                        <h5 className="trainer-desc">Weight Lifting Trainer</h5>
                    </div>
                    
                </div>

        </SwiperSlide>
        
        </Swiper>
        </div>
        </div>
    );
};

export default Trainers;