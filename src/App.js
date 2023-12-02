import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css'
import './login.css'
import './sign.css'
import Header from './Header';
import Gallery from './Gallery';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from "./Contact";
import Userlogin from './Userlogin';
import Signup from './Signup';
import Body from "./Body";
import Service from "./Service";





 function App() {
  return (
  <>
 
<Router>
<Header />
<Routes>
<Route path='/' element={<Home />}> </Route>
<Route path='/gallery' element={< Gallery />}> </Route>
<Route path='/aboutus' element={<About />}> </Route>
<Route path='/contact' element={<Contact  />}> </Route>
<Route path='/service' element={<Service  />}> </Route>
<Route path='/signup' element={<Signup />}> </Route>
<Route path='/Userlogin' element={<Userlogin />}> </Route>
<Route path='/body' element={<Body />}> </Route>
</Routes>
<Footer />

</Router>

  </>

     

  );
}

export default App;
