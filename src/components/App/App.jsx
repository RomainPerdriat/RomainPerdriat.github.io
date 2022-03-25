import ExpeTech from '../ExpeTech/ExpeTech';
import Header from '../Header/Header';
import Loisirs from '../Loisirs/Loisirs';
import Pres from '../Pres/Pres';
import Error404 from '../Error404/Error404';
import './app.scss';
import { Routes, Route} from 'react-router-dom';
import datas from '../../Datas/datasBouton';
import Contact from '../Contact/Contact';
import {useState} from 'react';
import ProjetPerso from '../ProjetPerso/ProjetPerso';
function App() {
  const [appState,setAppState] = useState(false)
  const handleButtonClick = (appState) => {
    setAppState(!appState)
    console.log(appState)
    
  }
  return (
    (!appState ? 
      <div>
        <div className="App">
          <Header buttons = {datas}
            handleButtonClick={handleButtonClick}
          />
            <Routes>
              <Route path ="/" element ={<Pres state= {appState}/>}/>
              <Route path ="/ExpeTech" element ={<ExpeTech/>}/>     
              <Route path ="/Loisirs" element ={<Loisirs/>}/>
              <Route path ="/pp" element = {<ProjetPerso/>}/>
              <Route path = "*" element ={<Pres state= {appState}/>}/>
            </Routes>   
        </div>
        <Contact/>
      </div>
    :
      <div>
        <div className="App2">
          <Header buttons = {datas}
            handleButtonClick={handleButtonClick}
          />
            <Routes>
              <Route path ="/" element ={<Pres state= {appState}/>}/>
              <Route path ="/ExpeTech" element ={<ExpeTech/>}/>     
              <Route path ="/Loisirs" element ={<Loisirs/>}/>        
              <Route path = "*"  element ={<Pres state= {appState}/>}/>
            </Routes>   
        </div>
        <Contact/>
      </div>
    )    
  );
}  
export default App;
