import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react'

let currentId = 0;
let positionStyle = {
  color: '#CD7F32',
  fontSize: '1.4rem',
};

function JobDetailsContent(props) {
  // console.log(props);
  return (
    <div 
    className="job-details" 
    id={props.id}
    onClick={props.deleteJobDetail}>
      <p style={positionStyle}><strong>{props.position}</strong></p>
      <p style={{fontSize:'1.1rem', fontWeight:'bold'}}>{props.companyName}<span style={{fontWeight:'normal', fontSize:'1rem'}}> - {props.location}</span></p>
      <p>{props.from + " - " + props.to}</p>
      <ul style={{marginLeft:'1.1rem'}}>{props.description.split('\n').map(desc=><li>{desc}</li>)}</ul>
    </div>
  );
}

function JobDetailsInput(props) {
  return (
    <div className="job-input-container">
      <Input
      placeholder="Position" 
      type="text" 
      onChange={props.onInputChange} 
      id="position" />

      <Input 
      placeholder="Company Name"
      type="text" 
      onChange={props.onInputChange} 
      id="companyName" />

      <label id="from">From</label>

      <Input type="date" id="from" onChange={props.onInputChange} />

      <label id="to">To</label>

      <Input type="date" id="to" onChange={props.onInputChange} />

      <Input 
      placeholder="Location"
      type="text" 
      onChange={props.onInputChange} 
      id="location" />

      <label>Description</label>
      <Textarea
      id="description"
      rows="5" 
      placeholder="Newline turns into bullet point"
      className="description"
      onChange={props.onInputChange}></Textarea>

      <Button 
      borderColor="burlywood" 
      color="burlywood" 
      _hover={{ bg: 'burlywood', color:'white' }}
      _active={{bg: '#b4956d'}} 
      size="md" 
      variant="outline" 
      onClick={props.onPressingSave}>Save</Button>

      <Button colorScheme="gray" size="md" onClick={props.hideContainer}>Cancel</Button>
    </div>
  );
}

export default function WorkExperience() {
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  let [jobDetails, setJobDetails] = useState([]);

  function handleInputChange(e) {
    if (e.target.id === "position") {
      setPosition(e.target.value);
    } else if (e.target.id === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.id === "from") {
      setFromDate(e.target.value);
    } else if (e.target.id === "to") {
      setToDate(e.target.value);
    } else if (e.target.id === "location") {
      setLocation(e.target.value);
    } else if(e.target.id === "description"){
      setDescription(e.target.value);
    }
  }

  function saveJobDetails(e) {
    setJobDetails([
      ...jobDetails,
      {
        id: ++currentId,
        prevPosition: position,
        prevCompanyName: companyName,
        prevWorkStart: fromDate,
        prevWorkEnd: toDate,
        prevWorkLocation: location,
        prevWorkDesc: description,
      }
    ]);
    console.log(jobDetails);
    e.target.parentNode.setAttribute('style', 'display:none;');
  }

  function hideJobInputContainer(e){
    e.target.parentNode.setAttribute('style', 'display:none;');
  }

  function showJobInputContainer(e){
    e.target.parentNode.childNodes[1].setAttribute('style', 'display:block;');
  }

  function removeJobDetails(e){
    setJobDetails(jobDetails.filter(details=>parseInt(e.target.parentNode.id) !== parseInt(details.id)));
  }

  return (
    <div className="Experience">
      <div className="job-details-container">
        {jobDetails.map((details) => (
          <JobDetailsContent
            id={details.id}
            position={details.prevPosition}
            companyName={details.prevCompanyName}
            from={details.prevWorkStart}
            to={details.prevWorkEnd}
            location={details.prevWorkLocation}
            description={details.prevWorkDesc}
            deleteJobDetail={removeJobDetails}
          />
        ))}
      </div>
      <JobDetailsInput
        onInputChange={handleInputChange}
        onPressingSave={saveJobDetails}
        hideContainer={hideJobInputContainer}
      />
      <Button className="add-work-experiance" onClick={showJobInputContainer}>Add Work Experiance</Button>
    </div>
  );
}
