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

function App() {
  return (
    <div className="App">
      <Header buttons = {datas}/>
      <Routes>
        <Route path ="/" element ={<Pres/>}/>
        <Route path ="/ExpeTech" element ={<ExpeTech/>}/>
        <Route path ="/VPComp" element ={<VPComp/>}/>
        <Route path ="/Formations" element ={<Formations/>}/>        
        <Route path ="/Loisirs" element ={<Loisirs/>}/>        
        <Route path = "*" element ={<Error404/>}/>
      </Routes>      
    </div>
  );
}

export default App;
