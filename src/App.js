import './App.css';
import {Routes,Route} from 'react-router-dom';
//Components Import
import Footer from "./components/Footer"
import Header from './components/Header';
//Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import JobsList from './pages/JobsList';
import JobDetail from './pages/JobDetail';
import Category from './pages/Category';
import Search from './pages/Search';
import Login from './pages/Login';
import {  useContext,useState } from 'react';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import OnlyAuth from './components/OnlyAuth';
import { AuthContext } from './context/AuthContext';


// admin routes
import HomeAdmin from './pages/admin/Home';
import CreateJobAdmin from "./pages/admin/Create"
import JobDetailAdmin from "./pages/admin/Details"
import OnlyAdmin from './components/OnlyAdmin';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  
import CreateJob from './pages/CreateJob';
import JobCategory from './pages/JobCategory';
import ApplyJob from './pages/ApplyJob';
import SearchJob from './pages/SearchJob';


function App() {
 
 

  const userContext = useContext(AuthContext);

  return (
    <div className="App">
      
      <Header/>
     
    <Routes>
    <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
       <Route path='/joblist' element={<JobsList/>}/>
       <Route path='/category' element={<Category/>}/>
       <Route path='/jobcategory' element={<JobCategory/>}/>
       <Route path='/jobdetail/:id' element={<JobDetail/>}/>
       <Route path='/applyjob/:id' element={<ApplyJob/>}/>
       <Route path='/createjob' element={<CreateJob/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/searchjob' element={<SearchJob/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/logout' element={<Logout />} />
        
        <Route path='/admin' element={ <OnlyAdmin> <HomeAdmin /> </OnlyAdmin> }>
            <Route path='create' element={<CreateJobAdmin />} />
            <Route path='details' element={<JobDetailAdmin />} />
        </Route>

    </Routes>
    <Footer/>
    </div>
   
  );
}

export default App;
