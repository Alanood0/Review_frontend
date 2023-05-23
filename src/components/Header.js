import { Link } from "react-router-dom";
function   Header(){
    return (
<header>
<div class="w3-top w3-hide-small">
  <div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
  <Link to='/' class="w3-bar-item w3-button">HOME</Link>
    <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
   <Link to='/Review' class="w3-bar-item w3-button">REVIEW</Link>
  </div>
</div>

<div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">

                    <li>  <Link to='/' className="smoothScroll">Home</Link></li>
                    <li>  <Link to='/Detail' className="smoothScroll">Detailed Course</Link></li>
                    <li>  <Link to='/Review' className="smoothScroll">Review</Link></li>
                   <hr/>

                </ul>
            </div>

<div className="collapse navbar-collapse">
                
            </div>


</header>


        );
    }
    
export default Header;
    