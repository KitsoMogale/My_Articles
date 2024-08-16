import { Link } from "react-router-dom"
import { useState } from "react";


export const Header=()=>{

   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

    return(
      <>
       <div id='header'>
         <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link  to='/'><h3 style={{color:'black'}}>Internet of Things</h3></Link>
          <Link  to='/podcastReview'><h3 style={{color:'black'}}>Podcast Review</h3></Link>
          <Link  to='/porfolioOfEvidence'><h3 style={{color:'black'}}>Portfolio of Evidence </h3></Link>
          <Link  to='/ToBeOrNotToBe'><h3 style={{color:'black'}}>To Be Or Not To Be </h3></Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

       </div>
           </>
    )
}



