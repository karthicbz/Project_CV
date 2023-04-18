import { useState } from "react";

let currentItem = 0;
let para = '';

export default function Skills() {
  let [text, setText] = useState('');
  let [items, setItem] = useState([]);

  function handleChange(e){
    setText(e.target.value);
    para+=e.target.value;
  }

  function addItem(){
    setItem([...items, {key:++currentItem, skill:text}]);
    para += ', ';
  }

  function makePara(){
    
  }
  return (
    <div className="skills">
        <p>{para}</p>
        <ul>{items.map(item=><li>{item.skill}</li>)}</ul>
        <button>Save Skills</button>
        <div>
        <input type="text" value={text}
        onChange={handleChange}/>
        <button onClick={addItem}>Add Skill</button>
        </div>
    </div>
  );
}