import { useEffect, useState } from 'react'
import axios from "axios";
import Search from './Search';
import JobCategory from './JobCategory';
import Jobs from './Jobs';
import HowItWork from '../components/HowItWork';


function Home() {

  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:3004/jobs?cat=${category}`).then(res => {
      if (res.data.status == true) {
        setJobs(res.data.jobs);
      } else {
        alert(res.data.message);
      }

    });

    // scroll to jobs
    function scrollToJobs() {
      if(category != "") {
        document.getElementById('element_within_div').scrollIntoView();
      }
    }
    scrollToJobs();

  }, [category])

  console.log(category);
  return (
    <>
      <Search setCategory={setCategory}/>
      <JobCategory setCategory={setCategory} />

      <div id='element_within_div'>
        <Jobs jobs={jobs} />
      </div>
    <HowItWork/>
    </>
  )
}

export default Home