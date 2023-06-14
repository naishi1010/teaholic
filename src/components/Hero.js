import {Fade} from 'react-reveal';


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
    <Fade top>
    <h1 className="hero__title">
      Start Your Day <br />
      With Energizing Kulhad Chaii!! <br />
      And Aesthetic Place.
    </h1>
    <button className="hero__button" onClick={orderNow}>Explore</button>
    </Fade>
    
  </section>
}

export default Hero;