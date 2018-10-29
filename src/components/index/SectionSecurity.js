import React from "react"

export default () => (
  <section className="section security">
    <div className="container">
      <h2 className="security-title">The 6 Layers of Nuweba Security</h2>
      <p className="security-description">Technology, not Voodoo</p>
      <div className="security-row">
        <div className="security-item security-item_first">
          <div className="security-item-left">
            <img src="img/firewall.svg" alt="" className="security-item-firewall" />
            <img src="img/fire.svg" alt="" className="security-item-fire" />
            <img src="img/head2.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">No Container Reuse</p>
            <p className="security-item-text">Ensuring that functions containers aren’t reused and being destroyed after every invocation, blocking attacker persistence ability</p>
          </div>
        </div>
        <div className="security-item security-item_second">
          <div className="security-item-left">
            <img src="img/firewall2.svg" alt="" className="security-item-firewall" />
            <img src="img/fire2.svg" alt="" className="security-item-fire" />
            <img src="img/head3.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">Credentials Vault</p>
            <p className="security-item-text">Secrets, tokens and IAM roles are stored in an inaccessible secured vault outside of the functions containers</p>
          </div>
        </div>
      </div>
      <div className="security-row">
        <div className="security-item security-item_third">
          <div className="security-item-left">
            <img src="img/firewall3.svg" alt="" className="security-item-firewall" />
            <img src="img/fire3.svg" alt="" className="security-item-fire" />
            <img src="img/head4.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">Code Execution Prevention</p>
            <p className="security-item-text">Observation of normal behavior based on low-level process activities – identifying deviations and malicious acts</p>
          </div>
        </div>
        <div className="security-item security-item_fourth">
          <div className="security-item-left">
            <img src="img/firewall4.svg" alt="" className="security-item-firewall" />
            <img src="img/fire4.svg" alt="" className="security-item-fire" />
            <img src="img/head5.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">Functions Vulnerability Firewall</p>
            <p className="security-item-text">Protection against attacks including XSS, SQLI, SSRF, Information Disclosure, XXE, and more</p>
          </div>
        </div>
      </div>
      <div className="security-row">
        <div className="security-item  security-item_fifth">
          <div className="security-item-left">
            <img src="img/firewall5.svg" alt="" className="security-item-firewall" />
            <img src="img/fire5.svg" alt="" className="security-item-fire" />
            <img src="img/head6.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">Network Traffic Inspection</p>
            <p className="security-item-text">Achieve fine-grained control and visibility over functions outbound network traffic, both internet and internal cloud services</p>
          </div>
        </div>
        <div className="security-item security-item_sixth">
          <div className="security-item-left">
            <img src="img/firewall6.svg" alt="" className="security-item-firewall" />
            <img src="img/fire6.svg" alt="" className="security-item-fire" />
            <img src="img/head.svg" alt="" className="security-item-head" />
          </div>
          <div className="security-item-right">
            <p className="security-item-title">Real time Anomaly Detection</p>
            <p className="security-item-text">Detection of anomalies in users interactions and internal function flow suspected as malicious, identifying potential attackers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
