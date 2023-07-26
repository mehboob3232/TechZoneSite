import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header() {
    const UserContext = useContext(AuthContext);
   console.log("contextUser:",UserContext)
    return (
        <>
       
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-primary">Jobs Zone</h1>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/howitwork" className="nav-item nav-link">How it Work</Link>

                   
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    <Link to="/admin" className="nav-item nav-link">Admin</Link>
                </div>
                {
                    ( UserContext.user == null) ?  <Link to="/login" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Login/Register</Link> :  <Link to="/logout" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Logout</Link>

                }
            
            </div>
        </nav>
        </>
    )
}

export default Header