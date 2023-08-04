
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
        alert("Request for delet is hitted ...")
        return
        axios
            .delete(`http://localhost:3004/delete-job/${id}`)
            .then((res) => {
                axios
                    .get("http://localhost:3004/alljobs")
                    .then((res) => {
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


    function updateJob(id) {
        alert("yes");
    }
    return (
        <>
            <div className="container">
                <div className="createMovie">
                    <Link to="/create">Create-Movie</Link>
                </div>
                <table class="table maindiv">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Genre</th>
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
                                        <td style={{ width: "350px" }}>
                                            {job.title}
                                            <br></br>Rating: {job.salary}
                                            <br></br> <img src="" />
                                            <img src="{star}" />
                                            <img src="{star}" />
                                        </td>
                                        <td>
                                            <img
                                                src="{movie.image}"
                                                style={{ width: "180px", height: "100px" }}
                                            />
                                        </td>
                                        <td>{ }</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    deleteJob(job.id);
                                                }}
                                                className="btn btn-dark border-white"
                                            >
                                                Delete
                                            </button>
                                            <br />
                                            <button ><Link to={`/admin/updateAdmin/${job.id}`}>update</Link></button>

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