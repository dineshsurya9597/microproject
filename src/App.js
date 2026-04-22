import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Navigators/Home/Home";
import About from "./Components/Navigators/About/About";
import Causes from "./Components/Navigators/Causes/Causes";
import Contacts from "./Components/Navigators/Contacts/Contacts";
import Pages from "./Components/Navigators/Pages/Pages";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Causes' element={<Causes/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/Pages' element={<Pages/>}/>
      </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;
