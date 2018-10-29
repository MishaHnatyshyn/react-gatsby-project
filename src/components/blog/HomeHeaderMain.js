import React from "react"
import { Link } from "gatsby"

export default ({posts}) => {
  const {node: post} = posts[0];
  const {frontmatter} = post;
  const { path, title, excerpt, img, comments, date } = frontmatter
  return(
  <div className="header-main">
    <img src={img} alt="" className="header-main-img"/>
      <div className="header-post">
        <Link to={path}>
        <h4 className="header-post-title">{title}</h4>
        <p className="header-post-text">{excerpt}</p>
        </Link>
        <div className="header-post-row">
          <div className="header-post-item">
            <img src="/img/stroke.svg" alt="" className="header-post-img" />
              <p className="header-post-description">{date}</p>
          </div>
          <div className="header-post-item">
            <img src="/img/stroke2.svg" alt="" className="header-post-img" />
              <p className="header-post-description">
                {`${comments} Coment${comments > 1 ? 's' : ''}`}
              </p>
          </div>
        </div>
      </div>
  </div>
  )
}
