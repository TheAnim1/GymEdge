import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Pricing.css";

const Pricing = () => {
    return (
        <div id="pricing">
            
<div id="generic_price_table">   
<section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
              
                <div className="bottom">
                <h1>Our Pricing</h1>
            </div>
                 
                </div>
            </div>
        </div>
        <div className="container">
            
         
            <div className="row">
                <div className="col-md-4">
                
           
                    <div className="generic_content clearfix">
                        
                  
                        <div className="generic_head_price clearfix">
                        
                        
                            <div className="generic_head_content clearfix">
                            
                         
										 
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Basic</span>
                                </div>
                         
                                
                            </div>
                         
                            
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">99</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/MON</span>
                                </span>
                            </div>
                            
                        </div>                            
                        


                        <div className="generic_feature_list">
                        	<ul>
                                <li><i className="fas fa-check text-success"></i>  Free Hand</li>
                                <li><i className="fas fa-check text-success"></i> Gym Fitness</li>
                                <li><i className="fas fa-check text-success"></i> Running</li>
                                <li><i className="fas fa-times text-danger"></i>  Yoga</li>
                                <li><i className="fas fa-times text-danger"></i> Body Building</li>
                                <li><i className="fas fa-times text-danger"></i> Exercise</li>
                            </ul>
                        </div>
                        
                        <div className="generic_price_btn clearfix">
                        <NavLink to="/register">Sign up</NavLink>
                        </div>
                        
                    </div>
                        
                </div>
                
                <div className="col-md-4">
                
                    <div className="generic_content active clearfix">
                        
                        <div className="generic_head_price clearfix">
                        
                            <div className="generic_head_content clearfix">
                            
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Standard</span>
                                </div>
                                
                            </div>
                            
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">199</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/MON</span>
                                </span>
                            </div>
                            
                        </div>                            
                        
                        <div className="generic_feature_list">
                        	<ul>
                                <li><i className="fas fa-check text-success"></i>  Free Hand</li>
                                <li><i className="fas fa-check text-success"></i> Gym Fitness</li>
                                <li><i className="fas fa-check text-success"></i> Running</li>
                                <li><i className="fas fa-check text-success"></i> Yoga</li>
                                <li><i className="fas fa-times text-danger"></i> Body Building</li>
                                <li><i className="fas fa-times text-danger"></i> Exercise</li>
                            </ul>
                        </div>
                        
                        <div className="generic_price_btn clearfix">
                        <NavLink to="/register">Sign up</NavLink>
                        </div>
                        
                    </div>
                        
                </div>
                <div className="col-md-4">
                
                    <div className="generic_content clearfix">
                        
                        <div className="generic_head_price clearfix">
                        
                            <div className="generic_head_content clearfix">
                            
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Premium</span>
                                </div>
                                
                            </div>
                            
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">299</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/MON</span>
                                </span>
                            </div>
                            
                        </div>                            
                        
                        <div className="generic_feature_list">
                        	<ul>
                                <li><i className="fas fa-check text-success"></i>  Free Hand</li>
                                <li><i className="fas fa-check text-success"></i> Gym Fitness</li>
                                <li><i className="fas fa-check text-success"></i> Running</li>
                                <li><i className="fas fa-check text-success"></i> Yoga</li>
                                <li><i className="fas fa-check text-success"></i> Body Building</li>
                                <li><i className="fas fa-check text-success"></i> Exercise</li>
                            </ul>
                        </div>
                        
                        <div className="generic_price_btn clearfix">
                        	<NavLink to="/register">Sign up</NavLink>
                        </div>
                        
                    </div>
                        
                </div>
            </div>	
            
        </div>
    </section>             

</div>
        </div>
    );
};

export default Pricing;