import React from "react"

export default () => (
  <section className="section tribe">
    <div className="container">
      <h2 className="tribe-title">Meet the Tribe</h2>
      <div className="tribe-row">
        <div className="tribe-img">
          <img src="/img/rectangle2.png" alt="" className="img-responsive" />
        </div>
        <div className="tribe-block">
          <p className="tribe-name">Ido Neeman</p>
          <p className="tribe-prof">CEO</p>
          <p className="tribe-text">Before co-founding Nuweba, Ido spent 11+ years leading cyber security oriented projects in an elite Israel Defense Forces technological unit. Ido later consulted for PwC and Value Base, where he was responsible for tech-oriented hedge fund and M&A deal leadership.</p>
        </div>
        <div className="click-bottom-fire click-bottom-fire_lefttribe">
          <img src="/img/torch.svg" alt="" className="click-bottom-img" />
        </div>
      </div>
      <div className="tribe-row">
        <div className="tribe-block">
          <p className="tribe-name">Yan Cybulski</p>
          <p className="tribe-prof">CTO</p>
          <p className="tribe-text">Prior to co-founding Nuweba, Yan managed teams in an elite Israel Defense Forces technological unit, developing new approaches and methodologies for cyber operations. Thereafter, he was a malware researcher for Trusteer and IBM, a vulnerabilities researcher for Adallom, and was the main developer of an enterprise cloud product group at Microsoft.</p>
        </div>
        <div className="tribe-img">
          <img src="/img/rectangle.png" alt="" className="img-responsive" />
        </div>
        <div className="click-bottom-fire click-bottom-fire_righttribe">
          <img src="/img/torch.svg" alt="" className="click-bottom-img" />
        </div>
      </div>
    </div>
  </section>
)
