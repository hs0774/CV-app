import React, {useState} from "react";
import Display from "../right/display";

function General({onSubmit,DisplayData}){

    const [general,setGeneral] = useState({
        first:DisplayData.first || '',
        // last: DisplayData.last || '',
        email:DisplayData.email || '',
        phone: DisplayData.phone || '',
    })

    function handleChange(e) {
         const {name,value} = e.target;
        setGeneral(prev => ({
            ...prev,
            [name]:value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();
       onSubmit(general);
       setGeneral({
        first: "",
        // last: "",
        email: "",
        phone: "",
      });
    }
   function handleClick() {
    setGeneral(DisplayData);
   }

    return (
        <div className="skills">
            <form onSubmit={handleSubmit}>
                <h2>General Info</h2>
                <label htmlFor="first">Full Name: </label>
                <input type="text" name='first' value={general.first} onChange ={handleChange}/>

                <label htmlFor="email">Email Address: </label>
                <input type="email" name='email' value={general.email} onChange ={handleChange} />

                <label htmlFor="phone">Phone Number: </label>
                <input type="tel" name='phone' value={general.phone} onChange ={handleChange} />
                <div className="submitEdit"><button>Submit</button>
            <button onClick={handleClick} type='button'>Edit</button></div>
            </form>
        </div> 
    )
}

export default General