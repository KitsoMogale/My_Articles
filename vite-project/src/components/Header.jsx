import { Link } from "react-router-dom"


export const Header=()=>{
    return(
       <div id='header'>
          <Link  to='/'><h3 style={{color:'white'}}>Home</h3></Link>
       </div>
    )
}