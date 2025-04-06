import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import {Fade} from "react-awesome-reveal";
import FloatBtn from './Components/FloatBtn';
import Footer from './Components/Footer';
import Porfolio from './Views/Porfolio.js';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
import Service from './Views/Services';
import { Invoices } from './Views/Invoices.js';
function App() {

  const pathNames = useLocation().pathname;

  return (
    <Fade delay={100}>
      <main className=' font-Monterast overflow-hidden'>
        { pathNames !== '/invoice' && <Navbar />}
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/Services' element = {<Service />} />
          <Route path = '/Porfolio' element = {<Porfolio />} />
          <Route path = '/invoice' element = {<Invoices />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        { pathNames !== '/invoice' && <FloatBtn />}
        { pathNames !== '/invoice' && <Footer />}
      </main>
    </Fade>
  );
}

export default App;
