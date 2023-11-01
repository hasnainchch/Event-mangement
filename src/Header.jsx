import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Header(){
 
    return(
     <>
   <div className='container bg-info ' >
    <h3 className='d-flex justify-content-center'>Event Website</h3>
    <ul id='stats'   >
        <li style={{width:'20%'}}><img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' alt='hello' width={40} height={30}></img></li>

        <li > <Link to="./"> Home</Link></li>
        <li > <Link to="./Counter"> Counter</Link></li>
        <li> <Link to="./aboutus"> About Us</Link></li>
        <li > <Link to="./services"> Services</Link></li>
        <li > <Link to="./Userlogin"> Login</Link></li>
        <li > <Link to="./signup"> Signup</Link></li><br /><br />
      
       
    </ul>
   </div>
   </>
    );
   
     }
     export default Header;