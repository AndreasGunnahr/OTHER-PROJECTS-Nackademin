import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage

export const ALL_PROJECTS_QUERY = graphql`
  query {
    portfolio {
      projects {
        title
      }
    }
  }
`
