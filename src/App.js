import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css'
import './login.css'
import './sign.css'
import Header from './Header';
import Counter from './Gallery';
import Home from './Home';
import Footer from './Footer';
import About from './About';

import Userlogin from './Userlogin';
import Signup from './Signup';
import Gallery from "./Gallery";



 function App() {
  return (
  <>
 
<Router>
<Header />
<Routes>
<Route path='/' element={<Home />}> </Route>
<Route path='/gallery' element={< Gallery />}> </Route>
<Route path='/about' element={<About />}> </Route>
<Route path='/signup' element={<Signup />}> </Route>
<Route path='/Userlogin' element={<Userlogin />}> </Route>
</Routes>
<Footer />

</Router>

  </>

     

  );
}

export default App;
