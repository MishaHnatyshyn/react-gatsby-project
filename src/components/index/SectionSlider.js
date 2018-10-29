import React from "react"
import Slider from "react-slick";

export default class extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  handleBeforeChangeTop = (oldIndex, newIndex) => {
    this.state.nav1.slickGoTo(newIndex);
  }

  handleBeforeChangeMain = (oldIndex, newIndex) => {
    this.state.nav2.slickGoTo(newIndex);
  }


  render(){
    const sliderTopSettings = {
      slidesToShow: 1,
      beforeChange: this.handleBeforeChangeMain,
    };
    const sliderMainSettings = {
      slidesToShow: 1,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      beforeChange: this.handleBeforeChangeTop,
    };
    return(
      <section className="section slider">
        <div className="container">
          <h2 className="slider-title">How The 6 Layers Work</h2>
        </div>
        <div className="sliders">
          <div className="container">
            <Slider
              className="slider-top"
              {...sliderTopSettings}
              ref={slider => (this.slider1 = slider)}
            >
              <div className="slider-top-item">No Container Reuse</div>
              <div className="slider-top-item">Credentials Vault</div>
              <div className="slider-top-item">Code Execution Prevention</div>
              <div className="slider-top-item">Vulnerability Firewall</div>
              <div className="slider-top-item">Network Traffic Inspection</div>
              <div className="slider-top-item">Anamoly Detection</div>
            </Slider>
            <Slider
              className="slider-main"
              {...sliderMainSettings}
              ref={slider => (this.slider2 = slider)}
            >
              <div className="slider-main-item">
                <img src="img/slide1.png" alt="" className="slider-img" />
                <div className="slide-flex slide-flex_first">
                  <div className="slide-flex-item">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Request</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">02.</p>
                    <p className="slide-text">Function Container<br/> Allocation</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">03.</p>
                    <p className="slide-text">Container <br/>Destruction Layer</p>
                  </div>
                </div>
              </div>
              <div className="slider-main-item">
                <img src="img/slide2.png" alt="" className="slider-img" />
                <div className="slide-flex">
                  <div className="slide-flex-item slide-flex-item_big">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Functions<br/> And Request</p>
                  </div>
                  <div className="slide-flex-item slide-flex-item_lg">
                    <p className="slide-number">02.</p>
                    <p className="slide-text">Network<br/> Interface</p>
                  </div>
                  <div className="slide-flex-item slide-flex-item_sm">
                    <p className="slide-number">03.</p>
                    <p className="slide-text">Dummy Credenital<br/> Generation</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">04.</p>
                    <p className="slide-text">Credentials<br/> Vault</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">05.</p>
                    <p className="slide-text">Request<br/> Delivery</p>
                  </div>
                </div>
              </div>
              <div className="slider-main-item">
                <img src="img/slide3.png" alt="" className="slider-img" />
                <div className="slide-flex">
                  <div className="slide-flex-item slide-flex-item_big">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Functions<br/> And Request</p>
                  </div>
                  <div className="slide-flex-item slide-flex-item_md">
                    <p className="slide-number">02.</p>
                    <p className="slide-text">Code Execution<br/> Prevention</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">03.</p>
                    <p className="slide-text">Signature<br/> Verification</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">04.</p>
                    <p className="slide-text">Operating<br/> System</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">05.</p>
                    <p className="slide-text">Request<br/> Delivery</p>
                  </div>
                </div>
              </div>
              <div className="slider-main-item">
                <img src="img/slide4.png" alt="" className="slider-img" />
                <div className="slide-flex">
                  <div className="slide-flex-item">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Function Filter<br/> Layer</p>
                  </div>
                </div>
              </div>
              <div className="slider-main-item">
                <img src="img/slide5.png" alt="" className="slider-img" />
                <div className="slide-flex">
                  <div className="slide-flex-item slide-flex-item_xxl">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Functions</p>
                  </div>
                  <div className="slide-flex-item slide-flex-item_biger">
                    <p className="slide-number">02.</p>
                    <p className="slide-text">Network<br/> Interface</p>
                  </div>
                  <div className="slide-flex-item slide-flex-item_xl">
                    <p className="slide-number">03.</p>
                    <p className="slide-text">Network<br/> Inspection</p>
                  </div>
                  <div className="slide-flex-item">
                    <p className="slide-number">04.</p>
                    <p className="slide-text">Request<br/> Delivery</p>
                  </div>
                </div>
              </div>
              <div className="slider-main-item">
                <img src="img/slide6.png" alt="" className="slider-img" />
                <div className="slide-flex">
                  <div className="slide-flex-item">
                    <p className="slide-number">01.</p>
                    <p className="slide-text">Anamoly<br/> Detection</p>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="slider-hide">
              <a href="/" className="slider-link">
                <img src="img/fullscreen.svg" alt="" className=""/>
                Click to Enlarge
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
