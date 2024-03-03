import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import {Fade} from "react-awesome-reveal";
import FloatBtn from './Components/FloatBtn';
import Footer from './Components/Footer';
import Porfolio from './Views/Porfolio.js';
import { Route, Routes} from 'react-router-dom';
import Service from './Views/Services';
function App() {
  return (
    <Fade delay={100}>
      <main className=' font-Monterast overflow-hidden'>
        <Navbar className="z-40" />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/Services' element = {<Service />} />
          <Route path = '/Porfolio' element = {<Porfolio />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <FloatBtn />
        <Footer />
      </main>
    </Fade>
  );
}

export default App;
