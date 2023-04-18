import { useState } from "react";

let currentId = 0;

function EducationDetailsContent(props){
    return(
        <div className="education-content">
            <p>{props.schoolName}</p>
            <p>{props.from+' - '+props.to}</p>
            <p>{props.degree}</p>
            <p>{props.fieldOfStudy}</p>
            <p>{props.location}</p>
        </div>
    )
}

function EducationDetailsInput(props){
    return(
        <div>
            <input 
            id="school"
            placeholder="School / College Name" 
            type="text"
            onChange={props.onInputChange}/>

            <label id="school-from">From</label>

            <input 
            id="school-from" 
            type="date"
            onChange={props.onInputChange}/>

            <label id="school-to">To</label>

            <input 
            id="school-to" 
            type="date"
            onChange={props.onInputChange}/>

            <label htmlFor="degree" id='degree'>Degree</label>
            <select name="" id="degree" onChange={props.onInputChange}>
                <option value={'None'}>None</option>
                <option value={'High School or Equivalent'}>High School or Equivalent</option>
                <option value={'Diploma'}>Diploma</option>
                <option value={"Bachelor's"}>Bachelor's</option>
                <option value={"Master's"}>Master's</option>
                <option value={"Doctorate"}>Doctorate</option>
                <option value={"Other"}>Other</option>
            </select>
            <input id="school-field" placeholder="Field of Study" type="text" onChange={props.onInputChange}/>

            <input id="school-location" placeholder="location" type="text" onChange={props.onInputChange}/>

            <button id="school-save" onClick={props.onSave}>Save</button>
            <button id="school-cancel">Cancel</button>
        </div>
    )
}

export default function EducationDetails(){
    const [schoolName, setSchoolName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [location, setLocation] = useState('');
    let [eduDetails, setEduDetails] = useState([]);

    function handleChange(e){
        if(e.target.id === 'school'){
            setSchoolName(e.target.value);
        }else if(e.target.id === 'school-from'){
            setFrom(e.target.value);
        }else if(e.target.id === 'school-to'){
            setTo(e.target.value);
        }else if(e.target.id === 'degree'){
            setDegree(e.target.value);
        }else if(e.target.id === 'school-field'){
            setFieldOfStudy(e.target.value)
        }else if(e.target.id === 'school-location'){
            setLocation(e.target.value)
        }
    }

    function addItems(){
        setEduDetails([...eduDetails, {
            key:++currentId,
            schoolName:schoolName,
            from:from,
            to:to,
            degree:degree,
            fieldOfStudy:fieldOfStudy,
            location:location,
        }]);
    }

    return(
        <>
        <>
            {eduDetails.map(details=><EducationDetailsContent
            schoolName={details.schoolName}
            from={details.from}
            to={details.to}
            degree={details.degree}
            fieldOfStudy={details.fieldOfStudy}
            location={details.location}/>)}
        </>
        <EducationDetailsInput 
        onInputChange={handleChange}
        onSave={addItems}/>
        </>
    )
}