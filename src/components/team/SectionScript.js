import React from "react"
import Popup from '../Popup'

export default class extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      popup: false,
    }
  }

  displayPopup = () => {
    this.setState(prevState => ({
      popup: !prevState.popup
    }))
  }

  render(){
    return(
      <section className="section script">
        <Popup displayPopup={this.displayPopup} active={this.state.popup}/>
        <div className="container">
          <div className="load-flex">
            <div className="load-left">
              <img src="/img/nuweba-manuscript.png" alt="" className="load-left-img" />
              <div className="load-left-shine">
                <div className="circle circle_left"></div>
                <div className="circle circle_right"></div>
              </div>
            </div>
            <div className="load-right">
              <h2 className="load-right-title">The Nuweba Manuscript</h2>
              <h4 className="load-right-subtitle">How Serverless Security Solves Top Serverless Challenges</h4>
              <img src="/img/nuweba-manuscript.png" alt="" className="load-right-img" />
              <button type="button" className="load-btn" onClick={this.displayPopup}>Download The Manuscript</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
