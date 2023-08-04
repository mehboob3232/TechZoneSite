import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import apimg from "../img/applyjob.png";

function ApplyJob() {
  const [contactinformation,setContactInformation] = useState("");
  const [resume,setResume] = useState("");

 const userContext = useContext(AuthContext);
 const params = useParams();
 let job = params.id
 const user = userContext.user?.id
 const userName = userContext.user?.name
 const userEmail = userContext.user?.email



  const handleSubmit = ()=>{
    if(contactinformation && resume){
      const applicationdata = {
        userName:userName,userEmail:userEmail, job : job, user : user,contactinformation,contactinformation,resume:resume
      } 
    
      axios.post("http://localhost:3004/application-create",applicationdata,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      }).then((res) => { 
        console.log(res.data);
        if(res.data.status == true) {
            alert("Application submit Successfully");
        } else {
            alert("Something went Wrong")
        }
      })
    }
  }
  return (
    
   <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ width: "600px" }} className='mx-auto'>
                <img src={apimg} className='mx-auto d-flex mt-2' style={{ width: "150px", height: "150px" }} />
                <h3 className='text-center text-primary' >Apply Now</h3>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input disabled value={userContext.user?.name}  type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input disabled value={userContext.user?.email} type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactinformation" className="form-label">Contact Information</label>
                        <input onChange={(e) => { setContactInformation(e.target.value) }} type="text" className="form-control" id="contactinformation" placeholder="xxxx-xxxxxxx"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" class="form-label">CV or Resume</label>
                        <input onChange={(e) => { setResume(e.target.files[0]) }} className="form-control" type="file" id="formFile" />
                    </div>
                    <button onClick={handleSubmit} className='btn btn-primary'>Submit Application</button>
                </div>
            </form>
        </>
    
  )
}

export default ApplyJob