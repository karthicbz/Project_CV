import { useState } from "react"

function Infos(props){
    // console.log(props);
    return(
        <>
            <input type="text" className={props.classname}
            placeholder={props.placeHoldertext} onChange={props.handleInputChange} onBlur={props.handleBlurChange}/>
        </>
    )
}


export default function GeneralInfos(){
    const [name, setName] = useState('');

    function handleInput(e){
        setName(e.target.value);
    }

    function handleBlur(e){
        if(name === ''){
            setName(e.target.placeholder);
        }
    }

    return(
        <div className="general-infos">
            <Infos 
            classname="general-input"
            handleInputChange={handleInput}
            handleBlurChange={handleBlur}
            placeHoldertext = "Name"/>
            <Infos 
            classname="general-input"
            handleInputChange={handleInput}
            handleBlurChange={handleBlur}
            placeHoldertext = "Mobile No"/>
            <Infos 
            classname="general-input"
            handleInputChange={handleInput}
            handleBlurChange={handleBlur}
            placeHoldertext = "E-Mail"/>
            <Infos 
            classname="general-input"
            handleInputChange={handleInput}
            handleBlurChange={handleBlur}
            placeHoldertext = "Location"/>
        </div>
    )
}