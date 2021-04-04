import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Link from "gatsby-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>
        <h1>My Site</h1>
        <div><Link to="/test-homepage">Test-Homepage</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/posts_new">Posts</Link></div>
        <div><Link to="/">Go Home</Link></div>
        <h1 style={{backgroundColor: "lightblue"}}>All Posts!</h1> 
        {Posts}
        </div>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`