import React from 'react';
import { Link, graphql } from 'gatsby';
import PostContainer from '../components/PostContainer'
import PostHeader from '../components/post/PostHeader'
import Layout from '../components/layout'

const Template = ({data, location, pageContext}) => {
  const {markdownRemark: post} = data;
  const {frontmatter, html} = post;
  const {title, excerpt, img, comments, date} = frontmatter;
  const {next, prev} = pageContext;

  return (
    <Layout>
        <PostHeader/>
      <section className="section inner">
        <div className="container">
          <img src={img} alt="" style={{ width: '100%' }} className="inner-img img-responsive" />
          <h2 className="inner-title">{title}</h2>
          <h4 className="inner-subtitle">{excerpt}</h4>
          <div className="header-post-row header-post-row_center">
            <div className="header-post-item">
              <img src="../img/stroke.svg" alt="" className="header-post-img" />
              <p className="header-post-description">{date}</p>
            </div>
            <div className="header-post-item">
              <img src="../img/stroke2.svg" alt="" className="header-post-img" />
              <p className="header-post-description">
                {`${comments} Coment${comments > 1 ? 's' : ''}`}
                </p>
            </div>
          </div>
      <div className="mark-down" dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </section>
        <section className="section post post_inner">
          <div className="container">
            <div className="post-row">
              <p className="post-go">
                {prev &&
                <Link to={prev.frontmatter.path}>
                  Previous Post
                </Link>}
              </p>
              <p className="post-go">
                {next &&
                <Link to={next.frontmatter.path}>
                  Next Post
                </Link>}
              </p>
            </div>
            <div className="post-content">
              {prev && <PostContainer display {...prev.frontmatter}/>}
              {next && <PostContainer display {...next.frontmatter}/>}
            </div>
          </div>
        </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            img
            excerpt
            comments
      }
    }
  }
`;

export default Template;
