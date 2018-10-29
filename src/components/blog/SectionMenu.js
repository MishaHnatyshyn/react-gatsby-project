import React from "react"
import { Link } from "gatsby"

export default ({ posts, pathname }) => {
    const tagsList = [];
    posts.forEach (({node: post}, index) => {
      const {frontmatter} = post;
      const { tags } = frontmatter;
      tags.forEach(tag => {
        if (tagsList.indexOf(tag) === -1) tagsList.push(tag)
      });
      tagsList.sort((a,b) => a.localeCompare(b))
    });
    return(
      <section className="section menu">
        <div className="container">
          <ul className="menu-list">
            <li className={`menu-item ${pathname === '/blog' || pathname === '/blog/' ? 'active' : ''}`} >
              <Link to={`/blog`}>All</Link>
            </li>
            <li className={`menu-item ${pathname === '/blog/recent' ? 'active' : ''}`}>
              <Link to={`/blog/recent`}>Most Recent</Link>
            </li>
            {tagsList.map(tag => (
              <li key={tag} className={`menu-item ${pathname === `/blog/${tag}` ? 'active' : ''}`}>
                <Link to={`/blog/${tag}`}>{tag} </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
