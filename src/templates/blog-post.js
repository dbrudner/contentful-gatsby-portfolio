import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>hey</div>
      </Layout>
    )
  }
}

export default BlogPostTemplate
