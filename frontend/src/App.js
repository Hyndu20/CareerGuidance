import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Authentication from './pages/Authentication';
import AdminLogin from './components/auth/AdminLogin';
import React from 'react';
import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
import ShowRoadmap from './components/Roadmaps/RoadmapTemplate';
import WeGuide from './pages/weGuide';
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'
import AdminSlidebarActions from './components/AdminSlidebarActions';
import Recommendedroute from './pages/Recommend';


function App() {
  

  

  return (
    // <div className="">
    //   <Home/>
    // </div>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        {/*Admin routes*/}
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        <Route path="/recommend" element={<Recommendedroute />}/>
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/myRoadmap" element={<ShowRoadmap />} />
        <Route path="/weGuide" element={<WeGuide />} />
        <Route path="/userDashboard" element={<UserDashboard />}/>
       
        
        <Route path='/myreport' element={<ShowRoadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
