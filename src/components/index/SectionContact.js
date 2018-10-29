import React from "react"

export default () => (
  <section className="section contact" id="contact">
    <div className="container">
      <div className="contact-flex">
        <div className="contact-left">
          <h2 className="contact-left-title">Contact The Tribe Leaders</h2>
          <p className="contact-left-text">Unlike our ancestors before us,<br/>
            We are accessbile not only through smoke signals and esoteric rituals, Send us an email.</p>
        </div>
        <div className="contact-right">
          <form action="" className="contact-right-form">
            <input type="text" name="name" className="contact-right-input" placeholder="Name" />
              <input type="email" name="email" className="contact-right-input" placeholder="Email" />
                <input type="text" name="phone" className="contact-right-input" placeholder="Phone" />
                  <input type="text" name="message" className="contact-right-input" placeholder="Message" />
                    <button type="submit" className="contact-right-btn">Contact us</button>
          </form>
        </div>
      </div>
    </div>
    <div className="contact-after">
      <img src="img/nuwbie-1.svg" alt="" className="contact-after-img desctop-img" />
        <img src="img/nuwbie-mob.svg" alt="" className="contact-after-img mob-img" />
    </div>
  </section>
)
