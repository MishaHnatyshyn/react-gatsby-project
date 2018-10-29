import React from "react"
import { Link } from 'gatsby';
import Slider from "react-slick";
import Popup from '../Popup'

export default class extends React.Component {
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
    const settings = {
      arrows: false,
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    };
    const {posts} = this.props
    return(
      <section className="section load" id="load">
        <Popup displayPopup={this.displayPopup} active={this.state.popup}/>
        <div className="container container_fluid">
          <div className="load-flex">
            <div className="load-left">
              <img src="img/nuweba-manuscript.png" alt="" className="load-left-img" />
              <div className="load-left-shine">
                <div className="circle circle_left"></div>
                <div className="circle circle_right"></div>
              </div>
            </div>
            <div className="load-right">
              <h2 className="load-right-title">The Nuweba Manuscript</h2>
              <h4 className="load-right-subtitle">How Serverless Security Solves Top Serverless Challenges</h4>
              <img src="img/nuweba-manuscript.png" alt="" className="load-right-img" />
              <button type="button" className="load-btn" onClick={this.displayPopup}>Download The Manuscript</button>
            </div>
          </div>
          <div className="load-slider">
            <h2 className="load-slider-title">Latest From the Blog</h2>
            <div className="load-slider-block">
              <Slider {...settings}>
                {posts.slice(0,4).map(({node: post}) => {
                  const {frontmatter} = post;
                  const {title, excerpt, path, img} = frontmatter;
                  return(
                    <div className="load-item" key={path}>
                      <div className="load-slider-top"  style={{ overflow: 'hidden'}}>
                        <img src={img} alt=""  style={{ width: '100%'}} />
                      </div>
                      <div className="load-slider-bottom">
                        <Link to={path}>
                          <h4 className="load-item-title">{title}</h4>
                          <p className="load-item-text">{excerpt}</p>
                        </Link>
                      </div>
                    </div>
                  )})}
              </Slider>
            </div>
          </div>
        </div>
        <div className="load-center-shine">
          <div className="circle circle_left"></div>
          <div className="circle circle_right"></div>
          <div className="circle circle_top"></div>
        </div>
      </section>
    )
  }
}
