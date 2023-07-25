import React, { useState,useEffect } from 'react'
import { getToken } from "../helpers";
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
function JobDetail() {
    const navigator = useNavigate();
    // const token = getToken();
    // console.log(token);
const [job,setJob] = useState(null);
const params = useParams();
const id = params.id;

    useEffect(()=>{
        axios.get("http://localhost:3004/job/" + id).then((res) => {
          
      if (res.data.status == true) {
        setJob(res.data.jobs);
      } else {
        alert(res.data.message);
      }
    });
  }, []);
  
    if(job !=null){
        return (
            <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center mb-5">
                                <img className="flex-shrink-0 img-fluid border rounded" src={job.image} alt="" style={{width: "80px", height: "80px"}}/>
                                <div className="text-start ps-4">
                                    <h3 className="mb-3">{job.title}</h3>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.positiontype}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>${job.salary}</span>
                                </div>
                            </div>
    
                            <div className="mb-5">
                                <h4 className="mb-3">Job description</h4>
                                <p>{job.description}</p>
                                <h4 className="mb-3">Responsibility</h4>
                                <p>{job.responsibility}</p>
                               
                                <h4 className="mb-3">Qualifications</h4>
                                <p>{job.education}</p>
                               
                            </div>
            
                            <div className="">
                                <h4 className="mb-4">Apply For The Job</h4>
                                <form>
                                        <div className="col-12">
                                            <Link to={`/applyjob/${job._id}`} className="btn btn-primary w-100" type="submit">Apply Now</Link>
                                        </div>
                                </form>
                            </div>
                        </div>
            
                        <div className="col-lg-5">
                            <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Job Summery</h4>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Category :{job.category}</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: {job.positiontype}</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: ${job.salary}</p>
                                <p><i className="fa fa-angle-right text-primary me-2"></i>Location:{job.location}</p>
                              
                            </div>
                            <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                <p className="m-0">Company Name : {job.company}</p>
                                <p className="m-0">Company Email : {job.email}</p>
                                <p className="m-0">Company Contact : {job.mobilenumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
export default JobDetail
