import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Jesse" />
      <p>What a world.</p>

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
