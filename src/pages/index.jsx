import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import _ from "lodash";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const groupTags = this.props.data.allMarkdownRemark.tags;
    const groupCategory = this.props.data.allMarkdownRemark.category;

    return (
      <Layout>
        <div className="main-container home">
          <Helmet title={config.siteTitle} />
          <SEO />
          <main className="posts">
            <h1>Latest Posts</h1>
            <PostListing postEdges={postEdges} />
          </main>
          <aside>
            <section>
              <h3>Categories</h3>
              <ul className="tags-cat">
                {groupCategory.map(category => (
                  <li key={category.fieldValue}>
                    <Link to={`/categories/${_.kebabCase(category.fieldValue)}/`}>
                      {category.fieldValue} ({category.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Tags</h3>
              <ul className="tags-cat">
                {groupTags.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      category: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
