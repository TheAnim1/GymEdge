import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/UseAuth";

const Register = () => {
    const {handleRegistration, handleEmail,handlePassword, error} = useAuth();
    

  
    return (
        <div>
                 <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                    <div className="card-title text-center border-bottom">
                        <h2 className="p-3">Register</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegistration}>
                        <div className="mb-4">
                            <label htmlFor="inputEmaile3" className="form-label">Email</label>
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