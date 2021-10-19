import React from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import "./Login.css";
const Login = () => {
    const{signInUsingGoogle, setUser, setIsLoading,error,handleLogin, handleEmail, handlePassword} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(location?.state?.from);
        })
        .finally(()=>setIsLoading(false));
    }
   
    
  
   
    return (
        <div>
             <div className="bottom">
                <h1>Login</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/Login</NavLink>
            </div>
            <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                    <div className="card-title text-center border-bottom">
                        <h2 className="p-3">Register</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                            <button type="submit" className="btn-style">Login</button>
                        </div>
                        </form>
                        <p>Already Have an Account? <Link to="/login">Login</Link> </p>
                    </div>
                    </div>
                </div>
            </div>
                <p>New to GymEdge? <Link to="/register">Register</Link> </p>
            <div className="mt-4">
                <h2>Or-</h2>
            </div>
            <button onClick={handleGoogleLogin} className="btn-style"><i className="fab fa-google"></i> Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;