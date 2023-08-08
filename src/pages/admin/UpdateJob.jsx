
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateJob() {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");
    const [positiontype, setPositionType] = useState("");
    const [category, setCategory] = useState("");
    const [education, setEducation] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [company, setCompany] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");

    const id = useParams().id;
    const navigate = useNavigate();
const handleSubmit = () =>{
    const jobData = {
        title: title, image: image, location: location, description: description, salary: salary, positiontype: positiontype, category: category, education: education,
         responsibility: responsibility, company: company, mobilenumber: mobilenumber, email: email   
    }
    axios.put("http://localhost:3004/update-job/"+id,jobData,{
       headers:{
        'Content-Type':'multipart/form-data'
       } 
    }
    ).then((res)=>{
        console.log(res.data)
        if(res.data.status == true){
            alert("job update successfully");
            navigate("/admin/jobsAdmin")
        } else {
            if(res.data.status == false){
                alert("something went wrong"); 
            }
        }
    })
}
 useEffect(()=>{
    axios.get("http://localhost:3004/job/"+id).then((res)=>{
       console.log(res.data.jobs);
       if(res.data.status == true){
        setImage(res.data.jobs.image);
        setTitle(res.data.jobs.title);
        setLocation(res.data.jobs.location);
        setDescription(res.data.jobs.description);
        setCompany(res.data.jobs.company);
        setCategory(res.data.jobs.category);
        setEmail(res.data.jobs.email);
        setSalary(res.data.jobs.salary);
        setPositionType(res.data.jobs.positiontype);
        setEducation(res.data.jobs.education);
        setMobileNumber(res.data.jobs.mobilenumber);
        setResponsibility(res.data.jobs.responsibility);
       } 
    })
 },[]);



    // const [job, setJob] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3004/job/`+id)
    //         .then((res) => {
    //             setJob(res.data.jobs);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    // const handleSubmit = () => {

    //     // if (title && image && location && description && salary && positiontype && category && education && responsibility && company && mobilenumber && email) {
    //         const jobData = {
    //             title: title, image: image, location: location, description: description, salary: salary, positiontype: positiontype, category: category, education: education,
    //             responsibility: responsibility, company: company, mobilenumber: mobilenumber, email: email
    //         }
    //         axios.put(`http://localhost:3004/update-job/`+id, jobData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //         ).then((res) => {
    //             console.log(res.data);
    //             if (res.data.status == true) {
    //                 alert("update successfully.")
    //             } else {
    //                 alert("error ... not update.")

    //             }
    //         })
    //         console.log(jobData);

    //     // }

    // }

    return (
        <div>
  <h3 className='text-center' style={{color:"#00b37a"}}>Update Job</h3>
             <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ width: "600px" }} className='mx-auto'>
                    <div className="mb-3">
                        <label htmlFor="formFile" class="form-label">Image</label>
                        <input  onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" accept='image/*'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="responsibility" className="form-label">Job Responsibility</label>
                        <textarea value={responsibility} onChange={(e) => { setResponsibility(e.target.value) }} className="form-control" id="responsibility" rows="3"></textarea>
                    </div>
                    <div className=" mt-2 mb-3">
                    <label htmlFor="location" className="form-label">Job Location</label>
                    <select value={location} onChange={(e) =>{setLocation(e.target.value)}} className="form-select border-0">
                                    <option selected>Location</option>
                                    <option value="lodhran">Lodhran</option>
                                    <option value="multan">Multan</option>
                                    <option value="bahawalpur">Bahawalpur</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company Name</label>
                        <input value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" className="form-control" id="company" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Company Email</label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobilenumber" className="form-label">Company Contact Number</label>
                        <input value={mobilenumber} onChange={(e) => { setMobileNumber(e.target.value) }} type="text" className="form-control" id="mobilenumber" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="positiontype" className="form-label">Position Type</label> 
                    <select value={positiontype} onChange={(e) =>{setPositionType(e.target.value)}} className="form-select border-0">
                                    <option selected>Position Type</option>
                                    <option value="full time">Full Time</option>
                                    <option value="part time">Part Time</option>
                                    <option value="remote">Remote</option>
                                </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input value={salary} onChange={(e) => { setSalary(e.target.value) }} type="text" className="form-control" id="salary" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="education" className="form-label">Education</label>
                        <select value={education} onChange={(e) => { setEducation(e.target.value) }} className="form-select" id="education" >
                            <option selected >Education</option>
                            <option value="matric">Matric</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="master">Master</option>

                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select value={category} onChange={(e) => { setCategory(e.target.value) }} className="form-select" id="category" >
                            <option selected >Category</option>
                            <option value="data entry">Data Entry</option>
                            <option value="web development">Web Development</option>
                            <option value="mobile app development">Mobile App Development</option>
                            <option value="graphic designing">Graphic Designing</option>
                            <option value="digital marketing">Digital Marketing</option>
                            <option value="wordpress">WordPress</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} className='btn btn-primary'>Update Job</button>
                </div>
            </form> 
        </div>
    )
}

export default UpdateJob