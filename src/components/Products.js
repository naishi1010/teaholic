import data from '../JSON/data.json'
import { useState } from 'react'
const Products=() =>{
    const [filter,setFilter] = useState('main-menu')
    return <section className="products section" id="products">
    <div className="products__container container">
      <h2 className="section__title">
        Find delicious food and <br />
        choose what you love
      </h2>

      <ul className="products__filters">
        
        <li
          
          className={`products__item products__line  == ${filter === 'Main Menu' && 'active-product'}`}
          onClick={()=>setFilter('Main Menu')}
          data-filter=".Main Menu"
        >
          <h3 className="products__title">Main Menu</h3>
          <span className="products__stock">5 products</span>
        </li>
        <li 
            className={`products__item products__line  == ${filter === 'Hot Beverages' && 'active-product'}`}
            onClick={()=>setFilter('Hot Beverages')} 
            data-filter=".Hot Beverages">
          <h3 className="products__title">Hot Beverages</h3>
          <span className="products__stock">3 Products</span>
        </li>
        <li 
          className={`products__item products__line  == ${filter === 'Cold Beverages' && 'active-product'}`}
          onClick={()=>setFilter('Cold Beverages')} 
          data-filter=".Cold Beverages">
          <h3 className="products__title">Cold Beverages</h3>
          <span className="products__stock">3 Products</span>
        </li>
      </ul>

      <div className="products__content grid">
        {data.categories.map((category,index) => {
          return (
            category.category === filter && (<article className="products__card main-menu">
            <div className="products__shape">
              <img
                src={category.imageUrl}
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h3 className="products__name">{category.title}</h3>
  
              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>)
          );
        })}

 
      </div>
    </div>
  </section>

}

export default Products;