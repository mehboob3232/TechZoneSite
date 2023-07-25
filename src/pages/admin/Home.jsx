import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/admin/create">Create Job</Link>
        <div className='admin-pages'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home