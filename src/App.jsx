import React,{ useState } from 'react'
import './App.css'
import General from './components/left/General'
import Education from './components/left/Education'
import Experience from './components/left/Experience'
import Display from './components/right/display'


function App() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [generalData, setGeneralData] = useState({
    first: "",
    email: "",
    phone: "",
  });

  const [experienceData,setExperienceData] = useState({
  company:'',
  title:'',
  startDate:'',
  endDate:'',
  location:'',
  experience:'',
  description:'',
})

  const [educationData,setEducationData] = useState({
  school:'',
  startDate:'',
  endDate:'',
  location:'',
  degree:'',
})

  const onSubmitExperience = (data) => {
    setExperienceData(data);
    setShowDisplay(true);
  };
  const handleSubmit = (data) => {
    setGeneralData(data);
    setShowDisplay(true);
  };

  const onSubmitEducation = (data) => {
    setEducationData(data);
    setShowDisplay(true);
  };
  return (
    <div className='container'>
    <div className='left'>
      <General onSubmit={handleSubmit} DisplayData={generalData}/>
      <Education onSubmitEducation={onSubmitEducation} DisplayEducationData={educationData} /> 
      <Experience onSubmitExperience={onSubmitExperience} DisplayExperienceData={experienceData} />
      </div>
      <div className='right'>
      {showDisplay && <Display general={generalData} experience={experienceData} education={educationData} />}
      </div>
    </div>
  );
}

export default App;
