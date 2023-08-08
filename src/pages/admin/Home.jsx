import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <h1 className='text-center mt-2' style={{ color: "#00b37a" }}>Admin Dashboard</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 ">
            <ul className='admin-links flex-column '>
              <li>
              <NavLink className="link1" to="/admin/create">CreateJob</NavLink>
              </li>
              <li>
              <NavLink className="link1" to="/admin/jobsAdmin">Jobs</NavLink>
              </li>
              <li>
              <NavLink className="link1" to="/admin/applications">All Applications</NavLink>
              </li>
              <li>
              <NavLink className="link1" to="/admin/users">All Users</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className='admin-pages'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

