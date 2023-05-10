import React from 'react'
import "../Roadmaps/Roadmap.css"
import { useState, useEffect } from "react";

const ShowRoadmap = () => {
   const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
   const [isSubMenuVisible_2, setIsSubMenuVisible_2] = useState(false);
   const [isSubMenuVisible_3, setIsSubMenuVisible_3] = useState(false);
   const [isSubMenuVisible_4, setIsSubMenuVisible_4] = useState(false);
   const [isSubMenuVisible_5, setIsSubMenuVisible_5] = useState(false);
   const [isSubMenuVisible_6, setIsSubMenuVisible_6] = useState(false);

  
    function toggleSubMenu() {
        console.log("toggle")
       setIsSubMenuVisible(!isSubMenuVisible);
       console.log(isSubMenuVisible)
     }
    function toggleSubMenu_2() {
      console.log("toggle-2")
     setIsSubMenuVisible_2(!isSubMenuVisible_2);
     console.log(isSubMenuVisible_2)
     }
   function toggleSubMenu_3() {
    console.log("toggle-3")
   setIsSubMenuVisible_3(!isSubMenuVisible_3);
   console.log(isSubMenuVisible_3)
    }
    function toggleSubMenu_4() {
      console.log("toggle-4")
     setIsSubMenuVisible_4(!isSubMenuVisible_4);
     console.log(isSubMenuVisible_4)
      }
      function toggleSubMenu_5() {
        console.log("toggle-5")
       setIsSubMenuVisible_5(!isSubMenuVisible_5);
       console.log(isSubMenuVisible_5)
        }
        function toggleSubMenu_6() {
          console.log("toggle-6")
         setIsSubMenuVisible_6(!isSubMenuVisible_6);
         console.log(isSubMenuVisible_6)
          }
             
 
 


    return (
        
<div>
<html lang="en">
  <head>
    
    <title>Career Guidance</title>
  </head>
  <body>
   <section className="introd">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fluid">
              <p id="par">
                Career interests are your preferences regarding work activities
                and environment. Identifying your career interest helps you make
                a well-informed and more strategic decision on your career
                path.<br />
                Following your career interest means your are pursuing a career
                that uses your talents and aligns with your passion and
                preferences. Understanding and being able to determine your
                passion helps you find fulfillment and success in your chosen
                profession.<br />
                In this webpage we provide tools that will enable you make the
                right career decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="header">
              <h2 id="one">
                Let us know <span class="h"> about your interests....</span>
              </h2>
            </div>
          </div>
        </div>
    </div>
    </section>
    <section class="mycourse">
      <div class="container" id="table">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <div class="business">
                <h3 onClick={toggleSubMenu}>Business</h3>
                {isSubMenuVisible && (
                <div id="course1"  style={{ display: isSubMenuVisible ? "block" : "none" }}>
                  <button class="btn">Business & Commerce</button>
                  <button class="btn">Business Management</button>
                  <button class="btn">Business & IT</button>
                  <button class="btn">Accounting</button>
                  <button class="btn" id="itB">Business Administration</button>
                </div>
                )}
              </div>
              <hr />
              <div class="tech">
                <h3 onClick={toggleSubMenu_2} id="two">Technology</h3>
                {isSubMenuVisible_2 && (
                <div id="course2"style={{ display: isSubMenuVisible_2 ? "block" : "none" }}>
                  <button class="btn">Computer Science</button>
                  <button class="btn">Software Engineering</button>
                  <button class="btn">Computer Systems Engineering</button>
                  <button class="btn">Data Science</button>
                  <button class="btn" id="itA">Information Technology</button>
                </div>
                 )}
              </div>
              <hr />
              <div class="lang">
                <h3 onClick={toggleSubMenu_3} id="three">Economics</h3>
                {isSubMenuVisible_3 && (
                <div id="course3"style={{ display: isSubMenuVisible_3 ? "block" : "none" }}>
                  <button class="btn" id="acc">Accounting</button>
                  <button class="btn">Financial Engineering</button>
                  <button class="btn">Commerce</button>
                  <button class="btn">Banking and Finance</button>
                  <button class="btn">Real Estate</button>
                </div>
                )}
              </div>
              <hr />
              <div class="engine">
                <h3 onClick={toggleSubMenu_4} id="four">Engineering</h3>
                {isSubMenuVisible_4 && (
                <div id="course4"style={{ display: isSubMenuVisible_4 ? "block" : "none" }}>
                  <button class="btn">Mechanical Engineering</button>
                  <button class="btn">Electrical Engineering</button>
                  <button class="btn" id="ENG">
                    Mechatronical Engineering
                  </button>
                  <button class="btn">Civil Engineering</button>
                  <button class="btn">Water Engineering</button>
                </div>
                )}
              </div>
              <hr />
              <div class="human">
                <h3 onClick={toggleSubMenu_5} id="five">Humanities</h3>
                {isSubMenuVisible_5 && (
                <div id="course5"style={{ display: isSubMenuVisible_5 ? "block" : "none" }}>
                  <button class="btn" id="itC">Land Survey</button>
                  <button class="btn">Geospatial Engineering</button>
                  <button class="btn">History</button>
                  <button class="btn">Religious Studies</button>
                  <button class="btn">Space Exploration</button>
                </div>
                )}
              </div>
              <hr />
              <div class="art">
                <h3 onClick={toggleSubMenu_6} id="six">Arts</h3>
                {isSubMenuVisible_5 && (
                <div id="course6"style={{ display: isSubMenuVisible_6 ? "block" : "none" }}>
                  <button class="btn" id="econ">Home Economics</button>
                  <button class="btn" id="prods">Product Design</button>
                  <button class="btn">Videography</button>
                  <button class="btn">Interior Design</button>
                  <button class="btn">Music Production</button>
                </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>

  </body>
</html>
</div>
    )
}
export default ShowRoadmap