import React from "react"
import HomeHeaderMain from './HomeHeaderMain'
import HomeHeaderDesctop from './HomeHeaderDesctop'
import HomeHeaderMobile from './HomeHeaderMobile'

export default ({posts}) => (
  <header className="header header_blog">
    <div className="container container_fluid">
      <HomeHeaderDesctop/>
      <HomeHeaderMobile/>
      <HomeHeaderMain posts={posts}/>
    </div>
  </header>
)
