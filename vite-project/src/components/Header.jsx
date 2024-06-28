import { Link } from "react-router-dom"


export const Header=()=>{
    return(
       <div id='header'>
          <Link  to='/'><h3 style={{color:'black'}}>Iot</h3></Link>
          <Link  to='/podcastReview'><h3 style={{color:'black'}}>Podcast Review</h3></Link>
       </div>
    )
}



