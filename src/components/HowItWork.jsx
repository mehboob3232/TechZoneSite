import React from 'react'
import wimg1 from '../img/img-1.png';
import wimg2 from '../img/img-2.png';
import wimg3 from '../img/img-3.png';
function HowItWork() {
  return (
    <>
       <section className="section">
        <div className="container">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="title text-center mb-4">
                            <h4 style={{fontSize: "2.5rem"}}>How It Work</h4>
                            <p className="text-muted mb-1">minima veniam quis nostrum exercitationem Quis autem vel eum iure</p>
                            <div className="title-icon position-relative">
                                <i className="mdi mdi-chevron-down position-relative h3 text-custom bg-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div className="how-it-work-img mb-4">
                                <img src={wimg1} alt="" className="img-fluid mx-auto d-block" style={{width:"150px"}}/>
                            </div>
                            <div>
                                <h5 className="f-18" style={{color:"#00B37A"}}>Register an account</h5>
                                <p className="f-14 text-muted">Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, venenatis vitae justo.</p>
                                <a href="#" className="text-custom">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div className="how-it-work-img mb-4">
                                <img src={wimg2} alt="" className="img-fluid mx-auto d-block"style={{width:"150px"}}/>
                            </div>
                            <div>
                                <h5 className="f-18"style={{color:"#00B37A"}}>Search your job</h5>
                                <p className="f-14 text-muted">Aliquam lorem ante dapibus in, viverra feugiatquis a tellus. Phasellus viverra nulla ut metus varius Quisque rutrum.</p>
                                <a href="#" className="text-custom">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div className="how-it-work-img mb-4">
                                <img src={wimg3} alt="" className="img-fluid mx-auto d-block"style={{width:"150px"}}/>
                            </div>
                            <div>
                                <h5 className="f-18"style={{color:"#00B37A"}}>Apply for job</h5>
                                <p className="f-14 text-muted">Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. Vivamus elementum semper.</p>
                                <a href="#" className="text-custom">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  )
}

export default HowItWork