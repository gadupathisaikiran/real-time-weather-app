
import './App.css';
import Search from './search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import AuthContext from './context';


function App() {

  



  
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>  
        
      
        <Route path="/search" element={<Search/>} />
      
        
    
    </Routes>
  </BrowserRouter>
  
 
    </div>
  );
}

export default App;
