import React from 'react';
import { graphql } from 'gatsby';
import HomeHeader from '../components/blog/HomeHeader';
import SectionMenu from '../components/blog/SectionMenu';
import SectionPost from '../components/blog/SectionPost';
import Layout from '../components/layout'

const Template = ({pageContext, data, location}) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <HomeHeader posts={posts}/>
      <SectionMenu posts={posts} pathname={location.pathname}/>
      <SectionPost posts={posts.reverse()}/>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogRecentQuery {
        allMarkdownRemark (
          sort: {fields: [frontmatter___date], order: ASC},
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                author
                img
                tags
                excerpt
                comments
              }
            }
          }
        }
      }
`;

export default Template;
