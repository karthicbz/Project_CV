import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

let currentId = 0;

function JobDetailsContent(props) {
  // console.log(props);
  return (
    <div className="job-details-container">
      <p>{props.position}</p>
      <p>{props.companyName}</p>
      <p>{props.from + " - " + props.to}</p>
      <p>{props.location}</p>
    </div>
  );
}

function JobDetailsInput(props) {
  return (
    <div className="job-input-container">
      <input
      placeholder="Position" 
      type="text" 
      onChange={props.onInputChange} 
      id="position" />

      <input 
      placeholder="Company Name"
      type="text" 
      onChange={props.onInputChange} 
      id="companyName" />

      <label id="from">From</label>

      <input type="date" id="from" onChange={props.onInputChange} />

      <label id="to">To</label>

      <input type="date" id="to" onChange={props.onInputChange} />

      <input 
      placeholder="Location"
      type="text" 
      onChange={props.onInputChange} 
      id="location" />

      <textarea 
      placeholder="Description turn into buller points"
      className="description"></textarea>
      <Button 
      borderColor="burlywood" 
      color="burlywood" 
      _hover={{ bg: 'burlywood', color:'white' }}
      _active={{bg: '#b4956d'}} 
      size="md" 
      variant="outline" 
      onClick={props.onPressingSave}>Save</Button>
      <Button colorScheme="gray" size="md">Cancel</Button>
    </div>
  );
}

export default function WorkExperience() {
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [location, setLocation] = useState("");
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
    }
  }

  function saveJobDetails() {
    setJobDetails([
      ...jobDetails,
      {
        id: ++currentId,
        prevPosition: position,
        prevCompanyName: companyName,
        prevWorkStart: fromDate,
        prevWorkEnd: toDate,
        prevWorkLocation: location
      }
    ]);
    // console.log(jobDetails);
  }

  return (
    <div className="Experience">
      <>
        {jobDetails.map((details) => (
          <JobDetailsContent
            position={details.prevPosition}
            companyName={details.prevCompanyName}
            from={details.prevWorkStart}
            to={details.prevWorkEnd}
            location={details.prevWorkLocation}
          />
        ))}
      </>
      <JobDetailsInput
        onInputChange={handleInputChange}
        onPressingSave={saveJobDetails}
      />
    </div>
  );
}
