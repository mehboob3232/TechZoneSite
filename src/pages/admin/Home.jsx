import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1 className='text-center mt-2' style={{color:"#00b37a"}}>Admin Dashboard</h1>
        <Link to="/admin/create">CreateJob</Link><br/>
        <Link to="/admin/jobsAdmin">Jobs</Link>
        <div className='admin-pages'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home