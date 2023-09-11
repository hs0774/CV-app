import React from "react";
import "../../css/display.css"
import accountSVG from "../../../public/images/account1.svg"
import emailSVG from "../../../public/images/email.svg"
import phoneSVG from "../../../public/images/phone.svg"

function Display({general,experience,education}){

    const stylee = {
        backgroundColor : 'rgb(184, 184, 243)',
    }
    return (
        <>
        <div className="general">
            <div><h1>General Information</h1></div>
            <div className="generalInfo">
                <div> <img src= {accountSVG} height='30px'/>
                <h2>{general.first}</h2></div>
               <div> <img src= {emailSVG} height='30px'/>
                <h2>{general.email}</h2></div>
               <div><img src= {phoneSVG} height='30px' color=""/>
                <h2>{general.phone}</h2></div>
                
            </div>  
        </div>  

        <div className="education"> 
           <div  className='educationDiv' style={stylee}><h1>Education</h1></div>
            <div className="educationInfo"> 
                <div className="leftEdu">
                    <div> 
                        <p>{education.startDate} - {education.endDate}</p>
                        <p>{education.location}</p>
                    </div>
                </div>
                <div className="rightEdu">
                    <p>{education.school}</p>
                    <p>{education.degree}</p>
                </div>
                
            </div>
        </div>
       
        <div className="experience">
        <div className="experienceDiv" style={stylee}><h1>Work Experience</h1></div>
            <div className="experienceInfo">
                <h2>{experience.company}</h2>
                <h2>{experience.title}</h2>
                <h2>{experience.startDate}</h2>
                <h2>{experience.endDate}</h2>
                <h2>{experience.location}</h2>
                <h2>{experience.description}</h2> 
            </div> 
        </div>
        
        </>
    )
}

export default Display