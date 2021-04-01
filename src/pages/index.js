import React from "react"
import Link from "gatsby-link"

const NavbarLinks = () => {
  return ( 
    <div> 
      <h1>My Site</h1>
        <div><Link to="/test-homepage">Test-Homepage</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/posts">Posts</Link></div>
    </div>
  )
}
export default NavbarLinks
