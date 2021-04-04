import React from "react"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <div>
      <h1>My blog posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
query {
  markdownRemark {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
}
`

