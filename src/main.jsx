import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import { Button, ButtonGroup } from '@chakra-ui/react'

let printDisplay = false;
function changeWidth(e){
  printDisplay = true;
  e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].setAttribute('style', 'width: 100%');
  window.print();
  if(printDisplay){
    e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].removeAttribute('style');
    printDisplay=false;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrintProvider>
    <ChakraProvider>
      <App />
      <NoPrint>
        <Button colorScheme="teal" onClick={changeWidth}>Save Pdf</Button>
        <h1>Hello</h1>
      </NoPrint>
    </ChakraProvider>
  </PrintProvider>
);
