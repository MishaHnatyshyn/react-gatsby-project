import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import HomeHeader from '../components/blog/HomeHeader';
import SectionMenu from '../components/blog/SectionMenu';
import SectionPost from '../components/blog/SectionPost';

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
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
    `}
    render={data => {
      const {edges: posts} = data.allMarkdownRemark;
      return (<Layout>
        <HomeHeader posts={posts}/>
        <SectionMenu posts={posts} pathname={location.pathname}/>
        <SectionPost posts={posts}/>
      </Layout>)
    }}
  />
)
