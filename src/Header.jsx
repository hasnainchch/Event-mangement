import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Header(){
 
    return(
    
   
   <div className="header">
            <div className="logo-contaniner">
                <img  className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="  />
            </div>
            <div className="nav-items">
<ul>
        <li > <Link to="./"> Home</Link></li>
        <li > <Link to="./Gallery"> Gallery </Link></li>
        <li> <Link to="./aboutus"> About Us</Link></li>
        <li > <Link to="./services"> Services</Link></li>
        <li > <Link to="./Userlogin"> Login</Link></li>
        <li > <Link to="./signup"> Signup</Link></li><br /><br />
      
       
    </ul>
   </div>
   </div>
   
    )
   
     };
     export default Header;