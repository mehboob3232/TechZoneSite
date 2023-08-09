import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function UserAdmin() {
  const [users,setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3004/allusers").then((res) =>{
      setUsers(res.data.users);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);

  function deleteuser(id){
    axios.delete(`http://localhost:3004/delete-user/${id}`).then((res) =>{
      console.log(res.data);
      if(res.data.status == true){
        alert("user delete successfully");
        navigate("/admin/users");
      } else {
        if(res.data.status == false){
          alert("Something went wrong");
        }
      }
      axios.get("http://localhost:3004/allusers").then((res)=>{
        setUsers(res.data.users);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
       <div className="container table-responsive">
                <table class="table maindiv ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {users.map((user, index) => {
                        console.log(user);
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>
                                           {user.email}
                                        </td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => { deleteuser(user._id)}}
                                                className="btn btn-danger"style={{ width: "100px", borderRadius: "5px",marginBottom:"8px" }} >
                                                Delete
                                            </button>
                                            <br />
                                            <button className='btn btn-info' style={{ width: "100px", borderRadius: "5px" }} ><Link className='text-white' to={`/admin/updateuser/${user._id}`}>update</Link></button>

                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        );
                    })}
                </table>
            </div>
      </>
  )
}

export default UserAdmin