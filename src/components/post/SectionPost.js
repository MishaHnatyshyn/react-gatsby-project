import React from "react"
import PostContainer from '../PostContainer'

export default ({posts}) => {
  return(
    <section className="section post post_inner">
      <div className="container">
        <div className="post-row">
          <p className="post-go">Previous Post</p>
          <p className="post-go">Next Post</p>
        </div>
        <div className="post-content">
          {posts.map (({node: post}, index) => {
            if (index > 1) return null;
            const {frontmatter} = post;
            return(<PostContainer {...frontmatter}/>)
          })}
        </div>
      </div>
    </section>
  )
}
