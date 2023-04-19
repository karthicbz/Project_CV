import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import { Button, ButtonGroup } from '@chakra-ui/react'

function changeWidth(e){
  e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].setAttribute('style', 'width: 100%');
  window.print();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrintProvider>
    <ChakraProvider>
      <App />
      <NoPrint>
        <Button onClick={changeWidth}>Save Pdf</Button>
      </NoPrint>
    </ChakraProvider>
  </PrintProvider>
);
