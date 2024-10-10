import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/about/AboutUs';
import Pricing from './components/Pricing/Pricing';
import BusinessGrowth from './components/Business/Business';
import VisaManagement from './components/Visa/Visa';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <AboutUs />
      <Pricing />
      <BusinessGrowth />
      <VisaManagement />
      <Footer />
    </div>
  );
}

export default App;
