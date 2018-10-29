import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className="footer-menu-item">
    <Link className="footer-menu-link" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ team }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-flex">
        <div className="footer-subscribe subscribe footer-flex-item">
          <form action="" >
            <h4 className="footer-title">Subscribe</h4>
            <input type="email" name="email" className="subscribe-input" placeholder="Email"/>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-follow footer-flex-item follow">
          <h4 className="footer-title">Follow us</h4>
          <div className="follow-flex">
            <a href="/" className="follow-link">
              <svg className="follow-link-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <path id="a" d="M0 0h24v24H0z"/>
                  <path id="b" d="M2.214 1C1.544 1 1 1.544 1 2.214v19.572C1 22.456 1.544 23 2.214 23h10.537v-8.52H9.884v-3.32h2.867V8.712c0-2.842 1.735-4.39 4.27-4.39 1.214 0 2.258.091 2.562.132v2.97h-1.758c-1.379 0-1.645.655-1.645 1.616v2.12h3.287l-.428 3.32h-2.86V23h5.607c.67 0 1.214-.544 1.214-1.214V2.21C23 1.54 22.456 1 21.786 1H2.214z"/>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="c" fill="#fff">
                    <use href="#b"/>
                  </mask>
                  <g fill="#b8c1cb" mask="url(#c)">
                    <path d="M0 0h24v24H0z"/>
                  </g>
                </g>
              </svg>
            </a>
            <a href="/" className="follow-link">
              <svg className="follow-link-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <path id="aa" d="M0 0h24v24H0z"/>
                  <path id="bb" d="M19.525 4.294a4.452 4.452 0 0 0-3.294-1.46c-2.49 0-4.512 2.072-4.512 4.627 0 .363.039.715.116 1.054-3.75-.193-7.076-2.033-9.304-4.837a4.712 4.712 0 0 0-.61 2.33c0 1.604.796 3.021 2.008 3.851a4.431 4.431 0 0 1-2.046-.577v.057c0 2.243 1.556 4.115 3.622 4.538a4.398 4.398 0 0 1-2.039.081c.575 1.838 2.24 3.177 4.216 3.213A8.913 8.913 0 0 1 1 19.089a12.564 12.564 0 0 0 6.919 2.078c8.303 0 12.842-7.051 12.842-13.168 0-.202-.004-.402-.011-.6A9.26 9.26 0 0 0 23 5.004a8.84 8.84 0 0 1-2.592.728 4.62 4.62 0 0 0 1.985-2.56 8.874 8.874 0 0 1-2.868 1.122z"/>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="cc" fill="#fff">
                    <use href="#bb"/>
                  </mask>
                  <g fill="#b8c1cb" mask="url(#cc)">
                    <path d="M0 0h24v24H0z"/>
                  </g>
                </g>
              </svg>
            </a>
            <a href="/" className="follow-link">
              <svg className="follow-link-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <path id="aaa" d="M0 0h24v24H0z"/>
                  <path id="bbb" d="M5.923 23h-4.56V8.305h4.56V23zM3.644 6.296A2.646 2.646 0 0 1 1 3.647 2.646 2.646 0 0 1 3.644 1a2.647 2.647 0 0 1 2.643 2.647 2.647 2.647 0 0 1-2.643 2.649zM23 23h-4.556v-7.147c0-1.704-.031-3.896-2.37-3.896-2.371 0-2.736 1.856-2.736 3.773V23H8.783V8.305h4.373v2.008h.061c.609-1.156 2.096-2.374 4.314-2.374 4.617 0 5.469 3.044 5.469 7V23z"/>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="ccc" fill="#fff">
                    <use href="#bbb"/>
                  </mask>
                  <g fill="#b8c1cb" mask="url(#ccc)">
                    <path d="M0 0h24v24H0z"/>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-menu footer-flex-item">
          <h4 className="footer-title">Menu</h4>
          <ul className="footer-menu-list">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/team">Company</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            {team ? (
              <ListLink to={`/team#contact`}>Contact</ListLink>
            ) : (
              <ListLink to={`/#contact`}>Contact</ListLink>
            )}
          </ul>
        </div>
        <div className="footer-menu footer-flex-item">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-menu-list">
            <li className="footer-menu-item"><a href="/" className="footer-menu-link">Terms & Conditions</a></li>
            <li className="footer-menu-item"><a href="/" className="footer-menu-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <svg className="footer-bottom-img" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
          <path fill="#FFF" fillRule="evenodd" d="M17.955 10.488l-1.277-3.597h-.036l-1.259 3.597h-1.651l2.246-5.352h1.382l2.252 5.352h-1.657zM8.28 16.3h5.5v-1.406h-5.5V16.3zm0 2.645h5.5V17.54h-5.5v1.405zM6.364 8.834l-1.03 1.672-1.12-.776 1.257-1.636-1.81-.534.417-1.297L5.853 7l-.108-2.075h1.37L7 7.036l1.738-.718.41 1.317-1.835.533 1.2 1.591-1.112.805-1.038-1.73zm17.158 1.5v-1.44h-1.6V4.938h1.847v-2.48L15.417.818l-4.465 11.359H9.158L13.623.818.16 2.458v2.48h1.82v3.956H.408v1.44l-.442 2.048h1.232l.785-1.555v1.721c0 5.483 4.486 9.97 9.97 9.97 5.483 0 9.97-4.487 9.97-9.97v-1.774l.81 1.607h1.233l-.443-2.047z"/>
        </svg>
        <p className="footer-bottom-text">© Nuweba 2018</p>
      </div>
    </div>
  </footer>
)
