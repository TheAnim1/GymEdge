import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logo.png';
const Footer = () => {
    return (
        <div className="mt-2">
 
            <footer className="text-center text-lg-start bg-light text-muted">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
                </div>
            
                <div>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </NavLink>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </NavLink>
                <NavLink to="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </NavLink>
                </div>

            </section>
            
            <section className="">
                <div className="container text-center text-md-start mt-5">
            
                <div className="row mt-3">
                
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        <img src={img} alt="" />
                    </h6>
                    <p>
                       World Class Gym At Your Doorstep
                    </p>
                    </div>
                
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        Services
                    </h6>
                    <p>
                        <NavLink to="#!" className="text-reset">Running</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-reset">Weight Lifting</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-reset">Yoga</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-reset">Boxing For Children</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-reset">Boxing For Adults</NavLink>
                    </p>
                    <p>
                        <NavLink to="#!" className="text-reset">Self-Defense</NavLink>
                    </p>
                    </div>
                
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                    <NavLink as={HashLink} to="/home#pricing" className="text-reset">Pricing</NavLink>
                    </p>
                    <p>
                        <NavLink to="/faq" className="text-reset">FAQ</NavLink>
                    </p>
                    <p>
                        <NavLink to="/about-us" className="text-reset">About Us</NavLink>
                    </p>
                    <p>
                        <NavLink to="/blogs" className="text-reset">Blogs</NavLink>
                    </p>
                    </div>
                

                
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                
                </div>
                
                </div>
            </section>
            
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2021 Copyright:
                <NavLink className="text-reset fw-bold" to="">GymEdge</NavLink>
            </div>
            
            </footer>

        </div>
    );
};

export default Footer;