import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Footer from './Footer'
// import '../../static/css/libs.min.css'
import '../../static/css/main.css'
export default ({ children, team }) => (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
    `}
     render={data => (
       <React.Fragment>
         <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title}>
           <link href="https://fonts.googleapis.com/css?family=Muli:200,300,400,600,800,900|Rajdhani:400,500,700|Roboto" rel="stylesheet" />
         </Helmet>
         {children}
         <Footer team={team}/>
       </React.Fragment>
      )}
  />
 )
