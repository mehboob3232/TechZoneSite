import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <Link to="/admin/create">CreateJob</Link><br/>
        <Link to="/admin/jobsAdmin">Jobs</Link>
        <div className='admin-pages'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home