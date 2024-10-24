// src/App.js
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
 import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Overview from './pages/Overview';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Footer from './Components/Footer';
import GraphicsDesign from './servicesPages/GraphicsDesign';
import BlockChain from "./servicesPages/BlockChain"
// import WebAppDevelopment from './servicesPages/WebAppDevelopment';
// import WebDevelopment from './servicesPages/WebDevelopment';
import DigitalMarketing from "./servicesPages/DigitalMarketing"
import SeoEx from "./servicesPages/SeoEx"
import ErpEx from './servicesPages/ErpEx';
import CloudSolutions from './servicesPages/CloudSolutions';
import AwsEx from "./servicesPages/AwsEx"
import PosEx from './servicesPages/PosEx';







function App() {
  return (
  <>  
  <BrowserRouter> 
    <Header />
    <Navbar/>
      <Routes>
        <Route Exact path="/" Component={Home} />,
        <Route Exact path="/About" Component={About } />,
        <Route Exact path="/ServicesPage" Component={ServicesPage } />,
        <Route Exact path="/Overview" Component={Overview } />,
        <Route Exact path="/Testimonials" Component={Testimonials } />,
        <Route Exact path="/ContactUs" Component={ContactUs} />,
        <Route Exact path="/GraphicsDesign" Component={GraphicsDesign } />,
        <Route Exact path="/BlockChain" Component={BlockChain } />,
        {/* <Route Exact path="/WebAppDevelopment" Component={WebAppDevelopment} />, */}
        {/* <Route Exact path="/WebDevelopment" Component={WebDevelopment} />, */}
        <Route Exact path="/DigitalMarketing" Component={DigitalMarketing} />,
        <Route Exact path="/SeoEx" Component={SeoEx} />,
        <Route Exact path="/ErpEx" Component={ErpEx} />,
        <Route Exact path="/CloudSolutions" Component={CloudSolutions } />,
        <Route Exact path="/AwsEx" Component={AwsEx } />,
        <Route Exact path="/PosEx" Component={PosEx } />,
         
      </Routes>
      <Footer />
      </BrowserRouter>
 </>    

  );
}

export default App;