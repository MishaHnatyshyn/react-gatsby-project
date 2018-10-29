import React from "react";
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import HomeHeader from '../components/index/HomeHeader';
import SectionDecision from '../components/index/SectionDecision';
import SectionSecurity from '../components/index/SectionSecurity';
import SectionDeep from '../components/index/SectionDeep';
import SectionClick from '../components/index/SectionClick';
import SectionLoad from '../components/index/SectionLoad';
import SectionContact from '../components/index/SectionContact';
import SectionSlider from '../components/index/SectionSlider';

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
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
                excerpt
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {edges: posts} = data.allMarkdownRemark;
      return (<Layout>
          <div className="skew"/>
          <HomeHeader/>
          <SectionDecision/>
          <SectionSecurity/>
          <SectionSlider/>
          <SectionDeep/>
          <SectionClick/>
          <SectionLoad posts={posts}/>
          <SectionContact/>
        </Layout>
      )
    }}
   />
 )
