import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

export default function Page({ data }) {
  return (
    <div>
      <h1>My Site</h1>
      <div><Link to="/test-homepage">Test-Homepage</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><Link to="/posts">Posts</Link></div>
      <div><Link to="/">Go Home</Link></div>
      <h1 style={{backgroundColor: "lightblue"}}>All Posts!</h1> 
      <p>We're a very cool website you should return to often.</p>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`