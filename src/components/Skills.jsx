import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

let currentItem = 0;
// let para = '';

export default function Skills() {
  let [text, setText] = useState('');
  let [items, setItem] = useState([]);
  let [para, setPara] = useState('');

  function handleChange(e){
    setText(e.target.value);
  }

  function addItem(e){
    setItem([...items, {key:++currentItem, skill:text}]);
    setText('');
    if(items.length >= 0){
      e.target.parentNode.parentNode.childNodes[1].setAttribute('style', 'display:flex;');
    }
  }

  function removeItem(e){
    setItem([...items].filter(item=>{
      if(item.skill !== e.target.textContent){
        return item;
      }
    }));
    if(items.length <= 1){
      console.log(e.target.parentNode.parentNode.childNodes[1].setAttribute('style', 'display:none'));
    }
  }

  const makePara = (e)=>{
    // let para = '';
    if(items.length !== 0){
      para = '';
      [...items].forEach(item=>{
        setPara(para += item.skill+', ');
      });
      setPara(para = para.slice(0, para.length-2)+'.');
      e.target.parentNode.setAttribute('style', 'display:none;');
      e.target.parentNode.parentNode.childNodes[0].classList.remove('skill--para');
    }else{
      setPara('');
    }
  }

  function showSkillEditor(e){
    e.target.classList.add('skill--para');
    e.target.parentNode.childNodes[1].setAttribute('style', 'display:flex;');
  }

  return (
    <div className="skills">
        <p className="skill--para" onClick={showSkillEditor}>{para}</p>
        <section className="skills--editor">
          <ul className="skill-list">{items.map(item=><li onClick={removeItem}>{item.skill}</li>)}</ul>
          <Button
          display="none"
          borderColor="burlywood" 
          color="burlywood" 
          _hover={{ bg: 'burlywood', color:'white' }}
          _active={{bg: '#b4956d'}} 
          size="md" 
          variant="outline"
          className="save-skill-button"
          onClick={makePara}>Save Skills</Button>
          <div>
          <Input 
          placeholder="Machine Learning"
          type="text" 
          value={text}
          onChange={handleChange}/>
          <Button
          className="add-skill-button" 
          onClick={addItem}>Add Skill</Button>
          </div>
        </section>
    </div>
  );
}