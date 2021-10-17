import React from 'react'
import './main.css'
import Symptoms from './components/Symptoms'
import Model from './components/Model'
import Calendar from './components/Calendar'

function Main() {
    return (
        <div>
            <div className="container">
             <div className="row  l-5">
            <div className="col-lg-3 mt-2 ">
            <Symptoms />
            </div>

            <div className="col-lg-7 mt-2  model">
              <Model />
              
              
            </div>
         </div>
         <div className="reference mb-2 mt-0">
          <ul className="mb-2">
                     <li> <div className="circle follicula"></div> follicular phase</li>
                        <li><div className="circle ovulating"></div> Ovulation</li>
                        <li><div className="circle luteral"></div> luteral phase</li>
                        <li><div className="circle menstrual"></div> menstrual phase</li> 
             </ul>
              
         </div>     
          
          
        
          
        </div>
            <div className="calender">
             <Calendar />
            </div>
           
        </div>
         
        
    )
}

export default Main
