import React from "react"
import TeamHeaderDesctop from './TeamHeaderDesctop'
import TeamHeaderMobile from './TeamHeaderMobile'

export default () => (
  <header className="header header_inner team">
    <div className="container container_fluid">
      <TeamHeaderDesctop/>
      <TeamHeaderMobile/>
      <h2 className="team-title">Serverless, The Serverless Way</h2>
      <h4 className="team-subtitle">We do everything with our core values of honestly, hard work and trust.</h4>
      <img src="/img/nuwebsa-worship.svg" alt="" className="team-logo"/>
    </div>
    <div className="block-item1">
      <img src="/img/travel-function.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item2">
      <img src="/img/travel-function4.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item3">
      <img src="/img/travel-function5.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item4">
      <img src="/img/travel-function2.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item5">
      <img src="/img/travel-function4.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item6">
      <img src="/img/travel-function.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item7">
      <img src="/img/travel-function2.png" alt="" className="img-responsive" />
    </div>
    <div className="block-item8">
      <img src="/img/travel-function.png" alt="" className="img-responsive" />
    </div>
  </header>
)
