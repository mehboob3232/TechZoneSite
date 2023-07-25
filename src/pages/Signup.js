import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import simg1 from '../img/sign-up.png';

function Signup() {
 
   

   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [fault, setFault] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const navigator = useNavigate();


   const handlesignup = ()=>{
    setIsLoading(true);
    axios.post("http://localhost:3004/signup-user", {
        name:name,
        email:email,
        password:password
    }).then((response)=>{
        console.log(response.data);
        if (response.data.status == false) {
          
            setFault(response.data.message);
            console.log(fault)
            
        }
        if (response.data.status == true) {
         
            navigator("/login");
        }
        setIsLoading(false);
    }).catch((err) => {
        setIsLoading(false);
        console.log(err.message)
    })
   
   }
  
  return (
    <>
    
     <form onSubmit={(e) => e.preventDefault()} style={{ width: "600px", margin: "20px auto" }}>
     <img src={simg1} className='mx-auto d-flex' style={{width:"90px",height:"90px"}}/>
     <h3 className='text-center text-primary' >Signup Account</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Already registered? 
                    </label>
                    <Link to="/login" className='mx-2 link'>Login</Link>
                </div>
                <div>
                    {
                        (fault !== null) ? <div className='alert alert-danger'>{fault}</div> : null
                    }
                </div>
                <button   onClick={handlesignup} type="submit" className="btn btn-primary" disabled={(isLoading == true) ? true : false} > {isLoading ? "Loading..." : "Register"}</button>
            </form>
    </>
  )
}

export default Signup