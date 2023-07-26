import React from 'react'
import Jobs from '../Jobs'

function AllJobs() {
    const [jobs, setJobs] = useState([]);
  return (
    <>
    
        <Jobs jobs={jobs} />
    </>
  )
}

export default AllJobs