import React from "react"
import Link from "gatsby-link"

const TestHomePage = () => {
    return ( 
      <div> 
          <h1>My Site</h1>
          <div><Link to="/test-homepage">Test-Homepage</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <div><Link to="/posts">Posts</Link></div>
          <div><Link to="/">Go Home</Link></div>
          <h1 style={{backgroundColor: "lightblue"}}>Why Attend!</h1> 
          <div class="HTML-paragraph_body"><p>The event will kick off with a real-world documentary that explores what it’s like to build an identity platform at one of the fastest-growing tech companies during one of the hardest years in modern history.</p><p>Oktane21 is a space to unite. To forge and deepen our connections -- to each other and to the people who increasingly rely on our technology in their lives. To understand where we’re going and how to get there, so we can keep building the experiences that connect with people and transform our world.</p><p>This is a completely free, virtual conference, accessible from anywhere. The health and safety of our community is of utmost importance to us. Don’t miss this unique opportunity to explore the future of how people, technology, and identity intersect.</p></div>         
      </div>
    )
  }
export default TestHomePage