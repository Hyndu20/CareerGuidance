import { Card } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Assesment from '../components/Assessment/Assesment';
// import MyAssessment from './MyAssessment';
import Profile from '../components/ProVersion/Profile';
import ShowRoadmap from '../components/Roadmaps/RoadmapTemplate';

const WeGuide = () => {
    const [loginauth, setLoginauth] = useState(true)
    const [active, setActive] = useState("profile");
    const navigate = useNavigate()

    useEffect(() => {
        callUserPage()
    }, [])
    const HandleLogout = () => {
        
        localStorage.removeItem('token');
        setLoginauth(false);
        console.log('done')
       
    }

    if(!loginauth)
    {return <Navigate to='/' />}

    

    const callUserPage = async () => {
        try {
            const res = await fetch('/user', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();
            console.log(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (err) {
            console.log(err)
            // navigate('/login')
        }
    }

   

   
    return (
        <div>
            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className='p-3 flex text-4xl font-bold  text-gray-600 py-1 ml-0 mt-2 rounded-full'>
                        {/* <img className="w-10" src={logo} alt="logo" /> */}
                        <span className="pl-3">CareerGuide</span>
                    </div>

                    <div class="mt-8 text-center">
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Welcome</h5>
                        <span class="hidden text-gray-400 lg:block">Student</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">

                        <li>
                            <button onClick={() => setActive("profile")} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Profile</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("academic")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span class="group-hover:text-gray-700">Academic Details</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("assessment")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                                <a href='myassessment' class="group-hover:text-gray-700">My Assesment</a>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("quiz")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                </svg>
                                <span class="group-hover:text-gray-700">Attempt Quiz</span>
                            </button>
                        </li>
                        <li>
                            <button href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Plan</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("report")} href="" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <a href='myreport' class="group-hover:text-gray-700">My Report</a>
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button onClick={HandleLogout} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <a href='/' class="group-hover:text-gray-700">Logout</a>
                    </button>
                </div>
            </aside>
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        
                    </div>
                </div>
                <div className="px-6 pt-6 2xl:container">
                        <ShowRoadmap />
                    </div>


               
            </div>
        </div>


    )
}

export default WeGuide