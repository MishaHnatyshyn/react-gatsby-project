import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="desctop">
    <div className="header-flex">
      <Link to="/">
      <div className="header-left">
        <svg className="header-img" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
          <path fill="#FFF" fillRule="evenodd" d="M17.955 10.488l-1.277-3.597h-.036l-1.259 3.597h-1.651l2.246-5.352h1.382l2.252 5.352h-1.657zM8.28 16.3h5.5v-1.406h-5.5V16.3zm0 2.645h5.5V17.54h-5.5v1.405zM6.364 8.834l-1.03 1.672-1.12-.776 1.257-1.636-1.81-.534.417-1.297L5.853 7l-.108-2.075h1.37L7 7.036l1.738-.718.41 1.317-1.835.533 1.2 1.591-1.112.805-1.038-1.73zm17.158 1.5v-1.44h-1.6V4.938h1.847v-2.48L15.417.818l-4.465 11.359H9.158L13.623.818.16 2.458v2.48h1.82v3.956H.408v1.44l-.442 2.048h1.232l.785-1.555v1.721c0 5.483 4.486 9.97 9.97 9.97 5.483 0 9.97-4.487 9.97-9.97v-1.774l.81 1.607h1.233l-.443-2.047z"/>
        </svg>
        <h2 className="header-title">Nuweba</h2>
      </div>
      </Link>
      <div className="header-right">
        <ul className="header-right-list">
          <li className="header-right-item"><Link to="/team" className="header-right-link">Company</Link></li>
          <li className="header-right-item"><Link to="/blog" className="header-right-link">Blog</Link></li>
          <li className="header-right-item"><Link to="/#contact" className="header-right-btn">
            <svg className="header-right-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
              <path fill="#4b74ff" fillRule="evenodd" d="M17.955 10.488l-1.277-3.597h-.036l-1.259 3.597h-1.651l2.246-5.352h1.382l2.252 5.352h-1.657zM8.28 16.3h5.5v-1.406h-5.5V16.3zm0 2.645h5.5V17.54h-5.5v1.405zM6.364 8.834l-1.03 1.672-1.12-.776 1.257-1.636-1.81-.534.417-1.297L5.853 7l-.108-2.075h1.37L7 7.036l1.738-.718.41 1.317-1.835.533 1.2 1.591-1.112.805-1.038-1.73zm17.158 1.5v-1.44h-1.6V4.938h1.847v-2.48L15.417.818l-4.465 11.359H9.158L13.623.818.16 2.458v2.48h1.82v3.956H.408v1.44l-.442 2.048h1.232l.785-1.555v1.721c0 5.483 4.486 9.97 9.97 9.97 5.483 0 9.97-4.487 9.97-9.97v-1.774l.81 1.607h1.233l-.443-2.047z"/>
            </svg>
            Contact</Link></li>
        </ul>
      </div>
    </div>
  </div>
)
