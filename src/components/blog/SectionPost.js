import React from "react"
import PostContainer from '../PostContainer'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showAll: false
    }
  }

  showAll = () => {
    this.setState({ showAll: true })
  }

  render(){
    const { posts } = this.props;
    return(
      <section className="section post">
        <div className="container">
          <div className="post-content">
            {posts.map (({node: post}, index) => {
              const {frontmatter} = post;
              const display = (index < 6 || this.state.showAll);
              return(<PostContainer display={display} key={index} {...frontmatter}/>)
            })}
          </div>
          <div className="post-more">
            <span
              style={{ display: this.state.showAll || posts.length < 6 ? 'none' : 'block'}}
              className="post-more-link pointer"
              onClick={this.showAll}
            >
              Show More
            </span>
          </div>
        </div>
      </section>
    )
  }
}


