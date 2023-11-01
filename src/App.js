import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css'
import './login.css'
import './sign.css'
import Header from './Header';
import Counter from './Counter';
import Home from './Home';
import Footer from './Footer';
import About from './About';

import Userlogin from './Userlogin';
import Signup from './Signup';



 function App() {
  return (
  <>
 
<Router>
<Header />
<Routes>
<Route path='/' element={<Home />}> </Route>
<Route path='/counter' element={<Counter />}> </Route>
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
