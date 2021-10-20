import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/UseAuth';
import img from '../../images/logo.png';
import "./Header.css";

const Header = () => {
    const {user, logOut} = useAuth()
    console.log(user)
    return (
        <>
         <Navbar collapseOnSelect expand="lg" variant="light" bg="light" sticky="top" className="nav">
        <Container>
            <Navbar.Brand href="#home">
                <img src={img} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                
                <Nav.Link as={HashLink} to="/home" className="text-dark nav-hov">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services" className="text-dark nav-hov">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/about-us" className="text-dark nav-hov">About Us</Nav.Link>
                <Nav.Link as={HashLink} to="/home#trainers" className="text-dark nav-hov">Trainers</Nav.Link>
                <Nav.Link as={HashLink} to="/home#pricing" className="text-dark nav-hov">Pricing</Nav.Link>
                <Nav.Link as={HashLink} to="/faq" className="text-dark nav-hov">FAQ</Nav.Link>
                <Nav.Link as={HashLink} to="/blogs" className="text-dark nav-hov">Blogs</Nav.Link>
               {user?.email ?
                    
                    <button onClick={logOut} className="log-btn">Log out </button> :
                    <div>
                        <Nav.Link as={HashLink} to="/login" className="log-btn">Login</Nav.Link>
                        <Nav.Link as={HashLink} to="/register" className="log-btn">Register</Nav.Link>
                    </div>
                   
                   
                   
            
               }
            
                {user?.email && 
                     <Navbar.Text className="user-name"> 
                         Signed in as: <a href="#login">{user?.displayName}</a>
                         </Navbar.Text>  
               }
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;