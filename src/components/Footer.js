
const Footer = ()=>{
    return (<footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Teaholics</h1>
      <p className="footer__description">
        The best place to chill<br />
        and hangout during night.
      </p>

      <div className="footer__content grid">
        <div className="footer__data">
          <h2 className="footer__subtitle">Address</h2>
          <p className="footer__information">
          4th Main Rd, B Block, AECS Layout, <br />
          Marathahalli, Bengaluru, Karnataka 560037
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Contact</h2>
          <p className="footer__information">
            +987654321 <br />
            teaholics@email.com
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Office</h2>
          <p className="footer__information">
            Everyday<br />
            10:30am - 11:45pm
          </p>
        </div>
        <div className="footer__data">
          <p className="footer__newsletter-description">
            Subscribe to our newsletter
          </p>

          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__input"
            />
            <button className="footer__button">
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer__group">
        <ul className="footer__social">
          <a href="instagram" target="_blank" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="facebook" target="_blank" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="google" target="_blank" className="footer__social-link">
            <i className="bx bxl-tiktok"></i>
          </a>
        </ul>

        <span className="footer__copy"> &#169; ypcode. All rigths reserved </span>
      </div>
    </div>
  </footer>)
}

export default Footer;