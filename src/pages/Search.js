import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [inputTxt,setInputTxt] = useState("");
    const [category,setCategory] = useState("")
    const [location,setLocation] = useState("");
  return (
    <>
     
        <div className="container-fluid bg-primary mt-1 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text" onChange={(e) =>{setInputTxt(e.target.value)}} className="form-control border-0" placeholder="Keyword" />
                            </div>
                            <div className="col-md-4">
                                <select onChange={(e) =>{setCategory(e.target.value)}} className="form-select border-0">
                                    <option selected>Category</option>
                                    <option value="data entry">Data Entry</option>
                                    <option value="web development">Web Development</option>
                                    <option value="mobile app development">Mobile App Development</option>
                                    <option value="graphic designing">Graphic Designing</option>
                                    <option value="digital marketing">Digital Marketing</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select onChange={(e) =>{setLocation(e.target.value)}} className="form-select border-0">
                                    <option selected>Location</option>
                                    <option value="lodhran">Lodhran</option>
                                    <option value="multan">Multan</option>
                                    <option value="bahawalpur">Bahawalpur</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to ={`/searchjob?q=${inputTxt}&cat=${category}&loc=${location}`} className="btn btn-dark border-0 w-100">Search</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Search