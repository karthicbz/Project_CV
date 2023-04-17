import { useState } from "react";

export default function Objective(){
    const [text, setText] = useState('');

    function handleInput(e){
        setText(e.target.value);
    }

    return(
        <div className="objective">
            <textarea 
            className="objective--textarea" 
            placeholder="Lorem Ipsum"
            onChange={handleInput}>{text}</textarea>
        </div>
    );
}