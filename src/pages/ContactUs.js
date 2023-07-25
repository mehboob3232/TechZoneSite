import React from 'react'

function ContactUs() {
  return (
    <>
       <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: "45px", height: "45px"}}>
                                        <i className="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <span>Jobs Zone Lodhran, Punjab, Pakistan</span>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: "45px", height: "45px"}}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <span>jobszone@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{width: "45px", height: "45px"}}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>+92 308 7322060</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.245067356254!2d71.63447497434939!3d29.509215143733414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9f1bc79afc67%3A0xabbf84fb0c1fd385!2sTareen%20Institute%20of%20Computer%20Education%20%26%20Resources%20(TICER)!5e0!3m2!1sen!2s!4v1689053319107!5m2!1sen!2s"
                            frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height:"150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default ContactUs