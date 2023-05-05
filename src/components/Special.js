const Special = () =>{
    return <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
        <h2 className="section__title">
          Best Tea that make you <br />
          happy and cheer you up!
        </h2>
      </div>

      <div className="special__category">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/kulhad.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Kulhad Tea</h3>
          <p className="special__description">
            We served in Kulhad to get essence of clay.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/premium.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Premium Tea</h3>
          <p className="special__description">
            Enjoy your tea with some exotic flavours.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/iced.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Iced Tea</h3>
          <p className="special__description">
            Enjoy your Tea with some ice wtih true taste.
          </p>
        </div>
      </div>
    </div>
  </div>
}
export default Special;