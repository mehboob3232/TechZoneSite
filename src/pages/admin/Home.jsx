import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <h1 className='text-center mt-2' style={{ color: "#00b37a" }}>Admin Dashboard</h1>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-2 navadmin ">
            <ul className='adminnav' type="none">
              <li>
              <NavLink className="adminLink" to="/admin/create">CreateJob</NavLink>
              </li>
              <li>
              <NavLink className="adminLink" to="/admin/jobsAdmin">Jobs</NavLink>
              </li>
              <li>
              <NavLink className="adminLink" to="/admin/users">All Users</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-10">
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

