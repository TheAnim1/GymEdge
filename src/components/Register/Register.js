import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../Hooks/UseAuth";

const Register = () => {
    const {handleRegistration, handleEmail,handlePassword, error, handleName} = useAuth();
    

  
    return (
        <div>
                 <div className="bottom">
                <h1>Register</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/Register</NavLink>
            </div>
                 <div className="mb-5 row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                   
                    <div className="card-body">
                        <form onSubmit={handleRegistration}>
                        <div className="mb-4">
                            <label htmlFor="inputText3" className="form-label">Name</label>
                            <input onBlur={handleName} type="text" className="form-control" id="inputText3" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="inputEmail3" className="form-label">Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="inputpassword3" className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                       
                        <div className="mb-4 text-danger">
                            {error}
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn-style">Register</button>
                        </div>
                        </form>
                        <p>Already Have an Account? <Link to="/login">Login</Link> </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;