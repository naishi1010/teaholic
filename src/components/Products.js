import data from '../JSON/data.json'
import { useState } from 'react'
const Products=() =>{
  const [filter, setFilter] = useState('Main Menu');
  

  // const toggleMenu = (itemId) => {
  //   if (expandedItemIds.includes(itemId)) {
  //     setExpandedItemIds(expandedItemIds.filter((id) => id !== itemId));
  //   } else {
  //     setExpandedItemIds([...expandedItemIds, itemId]);
  //   }
  // };
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleMenu = (itemId) => {
    if (expandedItemId === itemId) {
      setExpandedItemId(null); // Hide the menu if it's already expanded
    } else {
      setExpandedItemId(itemId); // Show the menu of the clicked item
    }
  };

    return <section className="products section" id="products">
    <div className="products__container container">
      <h2 className="section__title">
        Find delicious food and <br />
        choose what you love
      </h2>

      <ul className="products__filters">
        
        <li
          
          
          onClick={()=>setFilter('Main Menu')}
          className={`products__item products__line  == ${filter === 'Main Menu' && 'active-product'}`}
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
        {data.categories
          .filter((category) => category.category === filter)
          .map((category) => {
            const isMenuVisible = expandedItemId === category._id;

            return (
              <article className="products__card main-menu" key={category._id}>
                <div className="products__shape">
                  <img src={category.imageUrl} alt="" className="products__img" />
                </div>
                <div className="products__data">
                  <h3 className="products__name">{category.title}</h3>

                  <button
                    className="button products__button"
                    onClick={() => toggleMenu(category._id)}
                  >
                    <i
                      className={`bx ${isMenuVisible ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'}`}
                    ></i>
                  </button>

                  {isMenuVisible && (
                    <article className="menu__card">
                      <div>
                        {category.menu[0].name.map((nm, idx) => (
                          <div className="list_item" key={idx}>
                            <div className="list_names">{nm}</div>
                            <div className="list_price">{category.menu[0].price[idx]}</div>
                          </div>
                        ))}
                      </div>
                    </article>
                  )}
                </div>
              </article>
            );
          })}
      </div>
  
    </div> 
      
  
  </section>

}

export default Products;