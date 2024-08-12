import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Faq from './Faq';

function App() {
  let btnClasses = 'bg-orange-400 text-white border-double border-4 border-sky-500 rotate-90 p-2 ENQUIRE'
  let [modalStatus,setModalState] = useState(false)

  return (
    <div className="App">

      <button onClick = {()=>setModalState(true)} className={btnClasses}>ENQUIRE</button>
      <div className="modal">
        <div className={`modalOverlay ${modalStatus ? 'modalShow' : ''  } `} />
        <div className={`modalDiv ${modalStatus ? 'modalDivShow' : '' }  `}>
          <h1 className="text-3xl font-bold m-5">ENQUIRE NOW <span onClick={()=>setModalState(false)}>&times;</span></h1>
        </div>
      </div>
      
      <Faq/>
    </div>
  );
}

export default App;
