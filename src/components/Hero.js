
const Hero = () =>{
    const orderNow = () =>{
        window.scrollTo({
            top : 1150,
            behaviour : 'smooth',
        })
    }
    return  <section
    className="hero section"
    id="home"
    style={{backgroundImage: `url(./media/bg.webp)`}}
  >
    <h1 className="hero__title">
      Start Your Day <br />
      With Energizing Kulhad Chaii!! <br />
      And Aesthetic Place.
    </h1>
    <button className="hero__button" onClick={orderNow}>Order Now</button>
  </section>
}

export default Hero;