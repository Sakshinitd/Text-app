import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter,Routes,Route} from 'react-router';


function App() {
  //const toggleStyle=()=>{
   // if(color==='white'){
     // color:'white';
      //backgroundColor:'black';
    //}else{
    //color:'black';
    // backgroundColor:'white';
    //}
  //}
  return (
     //creating navbar
    <>
      <BrowserRouter basename="/Text-app">
       <Navbar title="text"/>
       <Routes>
       <Route path="/" element={<TextForm title="email"/>}/>
       <Route path="/About" element={<About/>}/>
       </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App;
