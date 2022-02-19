import ExpeTech from '../ExpeTech/ExpeTech';
import Formations from '../Formations/Formations';
import Header from '../Header/Header';
import Loisirs from '../Loisirs/Loisirs';
import Pres from '../Pres/Pres';
import VPComp from '../VPComp/VPComp';
import Error404 from '../Error404/Error404';
import './app.scss';
import { Routes, Route} from 'react-router-dom';
import datas from '../../Datas/datasBouton';
import Contact from '../Contact/Contact';
import {useState} from 'react';
function App() {
  const [appState,setAppState] = useState(false)
  const handleButtonClick = (appState) => {
    setAppState(!appState)
    
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
              <Route path ="/Loisirs&pp" element ={<Loisirs/>}/>      
              <Route path = "*" element ={<Error404/>}/>
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
              <Route path ="/Loisirs&pp" element ={<Loisirs/>}/>        
              <Route path = "*" element ={<Error404/>}/>
            </Routes>   
        </div>
        <Contact/>
      </div>
    )    
  );
}  
export default App;
