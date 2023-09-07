import React, {useState} from "react";

function Experience({onSubmitExperience, DisplayExperienceData}){

    const [experience,setExperience] = useState({
        company: DisplayExperienceData.company || '',
        title: DisplayExperienceData.title || '',
        startDate: DisplayExperienceData.startDate || '',
        endDate: DisplayExperienceData.endDate || '',
        location: DisplayExperienceData.location || '',
        experience: DisplayExperienceData.experience || '',
        description: DisplayExperienceData.description || '',
    })
    function handleChange(e) {
        const {name,value} = e.target;
        setExperience(prev => ({
            ...prev,
            [name]:value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmitExperience(experience);
       setExperience({
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        experience: "",
        description: ""
      });
    }
   function handleClick() {
    setExperience(DisplayExperienceData);
   }
    return (
        <div className="skills">
            <form onSubmit={handleSubmit}>
            <h2>Work Experience </h2>
                <label htmlFor="company"> Institution Name: </label>
                <input type="text" name='company' value={experience.company} onChange ={handleChange} />

                <label htmlFor="title"> Job title: </label>
                <input type="text" name='title' value={experience.title} onChange ={handleChange} />

                <label htmlFor="start">Start Date: </label>
                <input type="text" name='startDate' value = {experience.startDate} onChange ={handleChange} />

                <label htmlFor="end">End Date: </label>
                <input type="text" name='endDate' value ={experience.endDate} onChange ={handleChange} />

                <label htmlFor="location">Location: </label>
                <input type="text" name='location' value={experience.location} onChange ={handleChange} />

                <textarea htmlFor="description" type="text" name='description' value={experience.description}  onChange ={handleChange} placeholder="Describe your job" />
                <button>Submit</button>
                <button onClick={handleClick} type='button'>Edit</button>
            </form>
        </div>

       
    )
}

export default Experience