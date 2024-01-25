import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import FloatBtn from './Components/FloatBtn';
import Footer from './Components/Footer';

function App() {
  return (
    <main className=' font-FiraFont overflow-hidden'>
      <Navbar />
      <Home />
      <FloatBtn />
      <Footer />
    </main>
  );
}

export default App;
