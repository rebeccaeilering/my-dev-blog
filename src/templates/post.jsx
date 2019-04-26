import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import _ from "lodash";
import { Link } from "gatsby";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <section className="main-container">
              <h2>{post.title}</h2>
              <span>{post.date}</span>
              <Link
              key={post.category}
              to={`/categories/${_.kebabCase(post.category)}`}
              >              
              <button>{post.category}</button>
              </Link>
              <div className="post-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <UserInfo config={config} />
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
