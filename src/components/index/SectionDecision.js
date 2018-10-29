import React from "react"

export default () => (
  <section className="section decision">
    <div className="container">
      <div className="decision-top">
        <img src="img/nuwbie-red.svg" alt="" className="decision-top-img" />
      </div>
      <div className="decision-top-left">
        <img src="img/nuwbie-blue.svg" alt="" className="decision-top-img" />
      </div>
      <div className="decision-flex">
        <div className="decision-left">
          <h4 className="decision-subtitle">The only unified solution to serverless security, monitoring and performance.</h4>
          <p className="decision-text">Nuweba’s application-aware security solution lets you secure your serverless functions simply and seamlessly. This protects you against application-level attacks, and also delivers blazing-fast cold start times and real-time monitoring. We let you take control of your apps, while still enjoying the benefits of abstraction</p>
        </div>
        <div className="decision-right">
          <img src="img/nuwbie-purple.svg" alt="" className="decision-right-img" />
        </div>
      </div>
    </div>
  </section>
)
