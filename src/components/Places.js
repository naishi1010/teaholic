import { useState} from "react";
import data from '../JSON/data'
const Place = () =>{
    const [selectedImage,setSelectedImages] = useState(data.places[0].imageUrl)
    return <section className="place section" id="place">
    <div className="place__container container">
      <h2 className="section__title">
        Makes you feel good With <br />
        comfy environment
      </h2>

      <div className="place__content grid">
        <div className="place__images">
          <img
            src={selectedImage}
            alt=""
            className="place__img-big"
          />
          <div className="place__img-smalls">
            {data.places.map((places,index)=>{
                return (
                <img
                key = {index}
                src={places.imageUrl}
                alt=""
                onClick={()=>setSelectedImages(places.imageUrl)}
                className={`place__img-small ${selectedImage === places.imageUrl && 'active'}`}
                />
                );
            })}
            
            
          </div>
        </div>

        <div className="place__data">
          <h2 className="place__title">Find a place you love</h2>
          <p className="place__description">
            We provide the best place to stay positive <br />
            and fantasize with good vibes and beautiful design.
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default Place;