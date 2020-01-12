import React from "react"
import Layout from "../components/layout"
import Header from "../components/header.js"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool.." />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)
