
function JobCategory(props) {
    const handelalljobs = ()=> {
        props.setCategory("");
    }
  return (
    <div className="container-xxl py-2">
    <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
        <div className="row g-4">
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="cat-item rounded p-4" href="" onClick={ (e) => { e.preventDefault(); props.setCategory("data entry") } }>
                    <i className="fa fa-3x fa-mail-bulk text-primary mb-4" ></i>
                    <h6 className="mb-3">Data Entry</h6>
                   
                </a>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href="" onClick={ (e) => {  e.preventDefault(); props.setCategory("web development")} }>
                            <i className="fa fa-3x fa-headset  text-primary mb-4"></i>
                            <h6 className="mb-3">Web Development</h6> 
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item rounded p-4" href=""  onClick={ (e) => {  e.preventDefault(); props.setCategory("mobile app development")} }>
                            <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                            <h6 className="mb-3">Mobile App Development</h6>
                            
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item rounded p-4" href=""  onClick={ (e) => {  e.preventDefault(); props.setCategory("graphic designing")} }>
                            <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                            <h6 className="mb-3">Graphic Designing</h6>
                           
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item rounded p-4" href=""  onClick={ (e) => {  e.preventDefault(); props.setCategory("digital marketing")} }>
                            <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                            <h6 className="mb-3">Digital  Marketing</h6>
                           
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item rounded p-4" href=""  onClick={ (e) => {  e.preventDefault(); props.setCategory("wordpress")} }>
                            <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                            <h6 className="mb-3">WordPress</h6>  
                        </a>
                    </div>
        </div>
    </div>
    <button onClick={handelalljobs} className="mx-auto d-flex btn btn-primary mt-4 " style={{width:"150px", height:"50px",paddingLeft:"34px",paddingTop:"10px",fontSize:"20px"}}>All Jobs</button>
</div>
  )
}

export default JobCategory