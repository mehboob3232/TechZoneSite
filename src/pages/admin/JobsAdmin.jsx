
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

function JobsAdmin() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3004/alljobs")
            .then((res) => {
                setJobs(res.data.jobs);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function deleteJob(id) {
        axios.delete(`http://localhost:3004/delete-job/${id}`).then((res) => {

                axios.get("http://localhost:3004/alljobs").then((res) => {

                        setJobs(res.data.jobs);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <div className="container table-responsive">
                <table class="table maindiv ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Category</th>
                            <th scope="col">Location</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Position type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {jobs.map((job, index) => {
                        console.log(job);
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {job.title}
                                        </td>
                                        <td>
                                            <img
                                                src={job.image}
                                                style={{ width: "130px", height: "110px" }}
                                            />
                                        </td>
                                        <td>{job.category}</td>
                                        <td>{job.location}</td>
                                        <td>{job.salary}</td>
                                        <td>{job.positiontype}</td>
                                        <td>
                                            <button onClick={() => { deleteJob(job.id)}}
                                                className="btn btn-danger"style={{ width: "100px", borderRadius: "5px",marginBottom:"8px" }} >
                                                Delete
                                            </button>
                                            <br />
                                            <button className='btn btn-info' style={{ width: "100px", borderRadius: "5px" }} ><Link className='text-white' to={`/admin/updateAdmin/${job.id}`}>update</Link></button>

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

export default JobsAdmin