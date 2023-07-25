
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
function SearchJob() {

  const [searchParams,setSearchParams] = useSearchParams();
  const [jobs,setJobs] = useState([]);
  const q= searchParams.get("q");
  const cat= searchParams.get("cat");
  const loc= searchParams.get("loc");
  const [isLoading, setIsLoading] = useState(false);

  useEffect (()=>{
    setIsLoading(true);
    axios.get(`http://localhost:3004/search?q=${q}&cat=${cat}&loc=${loc}`).then((res)=>{
        if(res.data.status == true){
            setJobs(res.data.jobs);
            
            setIsLoading(false);
        }
    }).catch (err =>{setIsLoading(false); console.log(err.message)})
  },[searchParams]);
  return(
    (isLoading) ? <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> : (jobs.length > 0) ? <div>
    {jobs.map((job) => {
      return (
      <>
         
     <div className="container-xxl py-5">
         <div className="container">
             <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Search Jobs</h1>
             <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                 <div className="tab-content">
                     <div id="tab-1" className="tab-pane fade show p-0 active">
                         <div className="job-item p-4 mb-4">
                             <div className="row g-4">
                                 <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                     <img className="flex-shrink-0 img-fluid border rounded" src={job.image} alt="" style={{width: "80px", height: "80px"}}/>
                                     <div className="text-start ps-4">
                                         <h5 className="mb-3">{job.title}</h5>
                                         <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}</span>
                                         <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.positiontype}</span>
                                         <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job.salary}</span>
                                         <span className="text-truncate me-0"><i className="fa fa-list-alt ms-2 text-primary me-2"></i>{job.category}</span>
                                     </div>
                                 </div>
                                 <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                     <div className="d-flex mb-3">
                                         <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                         <Link to={`/jobdetail/${job._id}`} className="btn btn-primary" >View Job Detail</Link>
                                     </div>
                                    
                                 </div>
                             </div>
                         </div>
                         {/* <div className="job-item p-4 mb-4">
                             <div className="row g-4">
                                 <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                     <img className="flex-shrink-0 img-fluid border rounded" src={jimg2} alt="" style={{width: "80px", height: "80px"}}/>
                                     <div className="text-start ps-4">
                                         <h5 className="mb-3">Marketing Manager</h5>
                                         <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                         <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                         <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                     </div>
                                 </div>
                                 <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                     <div className="d-flex mb-3">
                                         <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                         <a className="btn btn-primary" href="">Apply Now</a>
                                     </div>
                                     <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                 </div>
                             </div>
                         </div>
                         <div className="job-item p-4 mb-4">
                             <div className="row g-4">
                                 <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                     <img className="flex-shrink-0 img-fluid border rounded" src={jimg3} alt="" style={{width: "80px", height: "80px"}}/>
                                     <div className="text-start ps-4">
                                         <h5 className="mb-3">Product Designer</h5>
                                         <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                         <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                         <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                     </div>
                                 </div>
                                 <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                     <div className="d-flex mb-3">
                                         <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                         <a className="btn btn-primary" href="">Apply Now</a>
                                     </div>
                                     <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                 </div>
                             </div>
                         </div>
                         <div className="job-item p-4 mb-4">
                             <div className="row g-4">
                                 <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                     <img className="flex-shrink-0 img-fluid border rounded" src={jimg4} alt="" style={{width: "80px", height: "80px"}}/>
                                     <div className="text-start ps-4">
                                         <h5 className="mb-3">Creative Director</h5>
                                         <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                         <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                         <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                     </div>
                                 </div>
                                 <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                     <div className="d-flex mb-3">
                                         <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                         <a className="btn btn-primary" href="">Apply Now</a>
                                     </div>
                                     <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                 </div>
                             </div>
                         </div>
                         <div className="job-item p-4 mb-4">
                             <div className="row g-4">
                                 <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                     <img className="flex-shrink-0 img-fluid border rounded" src={jimg5} alt="" style={{width: "80px", height: "80px"}}/>
                                     <div className="text-start ps-4">
                                         <h5 className="mb-3">Wordpress Developer</h5>
                                         <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                         <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>Full Time</span>
                                         <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                     </div>
                                 </div>
                                 <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                     <div className="d-flex mb-3">
                                         <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                         <a className="btn btn-primary" href="">Apply Now</a>
                                     </div>
                                     <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                                 </div>
                             </div>
                         </div> */}
                         
                     </div>
                 </div>
             </div>
         </div>
     </div>
      </>)
    })
    }
  </div> : <div class="alert alert-danger" role="alert">0 job found</div>
)
}

export default SearchJob