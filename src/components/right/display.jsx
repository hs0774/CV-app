import React from "react";

function Display({general,experience,education}){
    return (
        <>
        <h1>General Information</h1>
            <h2>{general.first}</h2>
            <h2>{general.last}</h2>
            <h2>{general.email}</h2>
            <h2>{general.phone}</h2>

        <h1>Education</h1>
         <h2>{education.school}</h2>
         <h2>{education.startDate}</h2>
         <h2>{education.endDate}</h2>
         <h2>{education.location}</h2>
         <h2>{education.degree}</h2>

        <h1>Work Experience</h1>
        <h2>{experience.company}</h2>
        <h2>{experience.title}</h2>
        <h2>{experience.startDate}</h2>
        <h2>{experience.endDate}</h2>
        <h2>{experience.location}</h2>
        <h2>{experience.description}</h2> 
        </>
    )
}

export default Display

//    {/* <h1>Education</h1>
//         <h2>{education.school}</h2>
//         <h2>{education.startDate}</h2>
//         <h2>{education.endDate}</h2>
//         <h2>{education.location}</h2>
//         <h2>{education.degree}</h2>

//         <h1>Work Experience</h1>
//         <h2>{experience.company}</h2>
//         <h2>{experience.title}</h2>
//         <h2>{experience.startDate}</h2>
//         <h2>{experience.endDate}</h2>
//         <h2>{experience.location}</h2>
//         <h2>{experience.description}</h2> */}
//         </>