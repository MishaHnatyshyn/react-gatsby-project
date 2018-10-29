import React from "react"
import PostHeaderDesctop from './PostHeaderDesctop'
import PostHeaderMobile from './PostHeaderMobile'
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
      (
        <header className="header header_inner">
          <Popup displayPopup={this.displayPopup} active={this.state.popup}/>
          <div className="container container_fluid">
            <PostHeaderDesctop displayPopup={this.displayPopup}/>
            <PostHeaderMobile displayPopup={this.displayPopup}/>
          </div>
        </header>
      )
    )
  }
}
