import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Header(){
  
 
    return(
    
   
  <div className="nav-bar">
     <div className="header">
            <div className="logo-contaniner">
                <img  className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" alt='logo' />
            </div>
            <div className="nav-items">
<ul>
        <li > <Link className='link'  to="./"> Home</Link></li>
        <li > <Link className='link' to="./Gallery"> Gallery </Link></li>
        <li> <Link className='link' to="./aboutus"> About Us</Link></li>
        <li > <Link className='link' to="./services"> Services</Link></li>
        <li > <Link className='link' to="./contact"> Contact us</Link></li><br /><br />
        <li > <Link className='link' to="./Userlogin"> Login</Link></li>
        <li > <Link className='link' to="./signup"> Signup</Link></li><br /><br />
      
       
    </ul>
   </div>
   </div>
  </div>
   
    )
   
     };
     export default Header;