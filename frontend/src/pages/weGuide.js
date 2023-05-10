import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Recommendedroute from './Recommend';

const WeGuide = () => {
    const [loginauth, setLoginauth] = useState(true)
    const [active, setActive] = useState("");
    

    
    const HandleLogout = () => {
        
        localStorage.removeItem('token');
        setLoginauth(false);
        console.log('done')
       
    }

    if(!loginauth)
    {return <Navigate to='/' />}
    
    
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
                            <button onClick={() => setActive("profile") } className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Profile</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("recommend")} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Plan</span>
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
               
               {active === "recommend" &&
                     <div className="px-6 pt-6 2xl:container">
                         <Recommendedroute />
                     </div>
                    // navigate('/recommend')
                }
                
               
            </div>
        </div>


    )
}


export default WeGuide