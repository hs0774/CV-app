import React, {useState} from "react";

function General(){
    const [general,setGeneral] = useState({
        first:'',
        last:'',
        email:'',
        phone:'',
    })

    function handleChange(e) {
        const {name,value} = e.target;
        setGeneral(prev => ({
            ...prev,
            [name]:value
        }))
    }
    console.log(general.first,general.last,general.email,general.phone)

    return (
        <div className="skills">
        <label htmlFor="first">First Name: </label>
        <input type="text" name='first' value={general.first} onChange ={handleChange} />

        <label htmlFor="last">Last Name: </label>
        <input type="text" name='last' value ={general.last} onChange ={handleChange} />

        <label htmlFor="email">Email Address: </label>
        <input type="email" name='email' value={general.email} onChange ={handleChange} />

        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" name='phone' value={general.phone}  onChange ={handleChange} />
        </div>
    )
}

export default General