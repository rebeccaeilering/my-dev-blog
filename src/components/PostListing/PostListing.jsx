import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      /* Your post list here. */
      postList.map(post => (
        <article>
          <Link to={post.path} key={post.title}>
            <h3>{post.title}</h3>
          </Link>
          <span>{post.date}</span>
          <p>{post.excerpt}</p>
          <Link to={post.path} key={post.title}>
          <span className="readmore">Read</span>
          </Link>
        </article>
      ))
    );
  }
}

export default PostListing;
