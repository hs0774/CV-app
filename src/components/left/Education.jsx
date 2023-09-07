import React, {useState} from "react";

function Education({onSubmitEducation, DisplayEducationData}){

    const [education,setEducation] = useState({
        school: DisplayEducationData.school ||'',
        startDate: DisplayEducationData.startDate ||'',
        endDate: DisplayEducationData.endDate ||'',
        location: DisplayEducationData.location ||'',
        degree: DisplayEducationData.degree ||'',
    })
    function handleChange(e) {
        const {name,value} = e.target;
        setEducation(prev => ({
            ...prev,
            [name]:value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitEducation(education);
        setEducation({
        school: "",
        startDate: "",
        endDate: "",
        location: "",
        degree:"",
      });
    }

    function handleClick() {
        setEducation(DisplayEducationData);
       }

    return (
        <div className="skills">
         <form onSubmit={handleSubmit}>
            <h2>Education </h2>
            <label htmlFor="school"> Institution Name: </label>
            <input type="text" name='school' value={education.school} onChange ={handleChange} />

            <label htmlFor="start">Start Date: </label>
            <input type="text" name='startDate' value ={education.startDate} onChange ={handleChange} />

            <label htmlFor="end">End Date: </label>
            <input type="text" name='endDate' value ={education.endDate} onChange ={handleChange} />

            <label htmlFor="location">Location: </label>
            <input type="text" name='location' value={education.location} onChange ={handleChange} />

            <label htmlFor="degree">Degree: </label>
            <input type="text" name='degree' value={education.degree}  onChange ={handleChange} />
            <button>Submit</button>
            <button onClick={handleClick} type='button'>Edit</button>
         </form>
        </div>

       
    )
}

export default Education