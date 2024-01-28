import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import FloatBtn from './Components/FloatBtn';
import Footer from './Components/Footer';
import Porfolio from './Views/Porfolio.js';
import { Route, Routes , Navigate} from 'react-router-dom';
import Service from './Views/Services';
function App() {
  return (
    <main className=' font-FiraFont overflow-hidden'>
      <Navbar className="z-40" />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Services' element = {<Service />} />
        <Route path = '/Porfolio' element = {<Porfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FloatBtn />
      <Footer />
    </main>
  );
}

export default App;
