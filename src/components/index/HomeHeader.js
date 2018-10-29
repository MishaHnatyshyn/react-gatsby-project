import React from "react"
import HomeHeaderMain from './HomeHeaderMain'
import HomeHeaderDesctop from './HomeHeaderDesctop'
import HomeHeaderMobile from './HomeHeaderMobile'

export default () => (
  <header className="header header_main">
    <div className="container container_fluid">
      <HomeHeaderDesctop/>
      <HomeHeaderMobile/>
      <HomeHeaderMain/>
      <div className="header-right-shine shine">
        <div className="circle circle_left"></div>
        <div className="circle circle_right"></div>
        <div className="circle circle_top"></div>
      </div>
      <div className="header-right-shine2 shine">
        <div className="circle circle_left"></div>
      </div>
    </div>
  </header>
)
