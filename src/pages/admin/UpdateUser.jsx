import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateUser() {
    const [name,setName]  = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");

    const id  = useParams().id;
    const navigate = useNavigate();

    const handleSubmit = () => {
        const userData = {
            name:name, email:email, password:password,role:role
        }
        axios.put("http://localhost:3004/update-user/"+id,userData,{
        }
        ).then((res) => {
          
            if(res.data.status == true){
                alert("user update Successfully");
                navigate("/admin/users");
            } else {
                if(res.data.status == false){
                    alert("Something went wrong")
                }
            }
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3004/user/"+id).then((res) => {
            console.log(res.data.users);
            if(res.data.status == true){
                setName(res.data.users.name);
                setEmail(res.data.users.email);
                setPassword(res.data.users.password);
                setRole(res.data.users.role)
            }
        })
    },[]);
  return (
   
    <div>
    <h3 className='text-center' style={{color:"#00b37a"}}>Update User</h3>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div style={{ width: "600px" }} className='mx-auto'>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="responsibility" />
                      </div>
                      <div className=" mt-2 mb-3">
                      <label htmlFor="role" className="form-label">Role</label>
                      <select value={role} onChange={(e) =>{setRole(e.target.value)}} className="form-select border-0">
                                      <option selected>Role</option>
                                      <option value="admin">Admin</option>
                                      <option value="user">User</option>
                                  </select>
                      </div>      
                      <button onClick={handleSubmit} className='btn btn-primary'>Update User</button>
                  </div>
              </form> 
          </div>
  )
}

export default UpdateUser