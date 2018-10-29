import React from 'react';
import { graphql } from 'gatsby';
import HomeHeader from '../components/blog/HomeHeader';
import SectionMenu from '../components/blog/SectionMenu';
import SectionPost from '../components/blog/SectionPost';
import Layout from '../components/layout'

const Template = ({pageContext, data, location}) => {
  const posts = data.allMarkdownRemark.edges;
  const tagToFind = pageContext.tag;
  const filtredPosts = posts.filter((post) => {
    const frontmatterType = post.node.frontmatter.tags;
    if (frontmatterType.includes(tagToFind)) {
      return post;
    }
    return undefined;
  });

  return (
    <Layout>
      <HomeHeader posts={filtredPosts}/>
      <SectionMenu posts={posts} pathname={location.pathname}/>
      <SectionPost posts={filtredPosts}/>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogTagsQuery {
        allMarkdownRemark {
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
