import React from "react"
import { Link } from 'gatsby';
import Stroke from '../../static/img/stroke.svg'


export default ({ path, title, excerpt, author, date, img, display }) => (
  <div className={`post-item ${display ? 'active' : ''}`}>
    <img src={img} alt="" className="post-item-img img-responsive" />
    <div className="post-item-main">
      <Link to={path}>
        <h4 className="post-item-title">{title}</h4>
        <p className="post-item-text">{excerpt}</p>
      </Link>
      <div className="post-item-flex">

        <p className="post-item-name">{author}</p>
        <div className="post-item-date">
          <img src={Stroke} alt="" className="header-post-img" />
          <p className="header-post-description">{date}</p>
        </div>
      </div>
    </div>
  </div>
)
