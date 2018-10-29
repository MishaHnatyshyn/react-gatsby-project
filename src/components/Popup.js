import React from "react"

export default class extends React.Component {

  close = (e) => {
    e.stopPropagation();
    if (e.target === document.getElementById("pop-container")){
      this.props.displayPopup();
    }
  };

  render(){
    const { active } = this.props;
    return(
      <div className={`popup ${active ? 'active' : ''}`} id="pop-container" onClick={this.close}>
        <div className={`popup-container ${active ? 'active' : ''}`}>
          <div className="popup-left">
            <img src="/img/nuwbie-mob.svg" alt="" className="popup-left-img" />
          </div>
          <div className="popup-right">
            <h4 className="popup-right-subtitle">The Nuweba Manuscript</h4>
            <h2 className="popup-right-title">How Serverless Security Solves Top Serverless Challenges</h2>
            <form action="" className="contact-right-form">
              <input type="text" name="name" className="contact-right-input" placeholder="Name" />
              <input type="email" name="email" className="contact-right-input" placeholder="Email" />
              <button type="submit" className="contact-right-btn popup-right-btn">Send me a download link</button>
              <label className="popup-right-row">
                <input type="checkbox" className="popup-right-input" />
                <div className="popup-right-check"/>
                <p className="popup-right-text">Yes, I’d love to occiasionally receive the latest serverless security news updates from Nuweba</p>
              </label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

