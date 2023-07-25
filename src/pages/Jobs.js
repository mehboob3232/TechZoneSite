
import { Link } from 'react-router-dom';

function Jobs(props) {
   
    if (props.jobs?.length < 0) {
        return (
            <>
                <div classNameName="spinner-border  text-primary" role="status">
                    <span classNameName="visually-hidden">Loading...</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            {
                                                props.jobs.map((job) => {
                                                    return (
                                                        <>
                                                           
                                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                                <img className="flex-shrink-0 img-fluid border rounded" src={`${job.image}`} alt="" style={{ width: "80px", height: "80px" }} />
                                                                <div className="text-start ps-4">
                                                                    <h5 className="mb-3">{job.title}</h5>
                                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}</span>
                                                                    <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.positiontype}</span>
                                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>${job.salary}</span>
                                                                    <span className="text-truncate me-0"><i className="fa fa-list-alt ms-2 text-primary me-2"></i>{job.category}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                                <div className="d-flex mb-3">
                                                                    <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></a>
                                                                    <Link to={`/jobdetail/${job._id}`} className="btn btn-primary" >View Job Detail</Link>
                                                                </div>
                                                            </div>
                                                            <div className='card col-lg-12 '></div>
                                                            
                                                        </>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Jobs


