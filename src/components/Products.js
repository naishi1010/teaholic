import data from '../JSON/data.json'
import { useState } from 'react'
import {Slide} from 'react-reveal'
import {Fade} from 'react-reveal'
import {useEffect } from 'react';





const Products = () => {
  const [filter, setFilter] = useState('Main Menu');
  const [expandedItemId, setExpandedItemId] = useState([]);

  const toggleMenu = (itemId) => {
  if (expandedItemId.includes(itemId)) {
    setExpandedItemId(expandedItemId.filter((id) => id !== itemId)); // Hide the menu if it's already expanded
  } else {
    setExpandedItemId([...expandedItemId, itemId]); // Show the menu of the clicked item
  }
};

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <Fade left delay={400}>
          <h2 className="section__title">
            Find delicious food and <br />
            choose what you love
          </h2>
        </Fade>

        <ul className="products__filters">
          <Fade left delay={600}>
            <li
              onClick={() => setFilter('Main Menu')}
              className={`products__item products__line ${filter === 'Main Menu' && 'active-product'}`}
              data-filter=".Main Menu"
            >
              <h3 className="products__title">Main Menu</h3>
              <span className="products__stock">5 products</span>
            </li>
            <li
              className={`products__item products__line ${filter === 'Hot Beverages' && 'active-product'}`}
              onClick={() => setFilter('Hot Beverages')}
              data-filter=".Hot Beverages"
            >
              <h3 className="products__title">Hot Beverages</h3>
              <span className="products__stock">3 Products</span>
            </li>
            <li
              className={`products__item products__line ${filter === 'Cold Beverages' && 'active-product'}`}
              onClick={() => setFilter('Cold Beverages')}
              data-filter=".Cold Beverages"
            >
              <h3 className="products__title">Cold Beverages</h3>
              <span className="products__stock">3 Products</span>
            </li>
          </Fade>
        </ul>

        <div className="products__content grid">
          {data.categories
            .filter((category) => category.category === filter)
            .map((category, index) => {
              const isMenuVisible = expandedItemId.includes(category._id);

              // Calculate menu height
              const menuItems = category.menu[0].name.length;
              const itemHeight = 20; // Adjust this value as needed
              const menuHeight = isMenuVisible ? menuItems * itemHeight : 0;

              return (
                <Fade key={category._id} bottom delay={100 * index}>
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
                        <i className={`bx ${isMenuVisible ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'}`}></i>
                      </button>

                      {isMenuVisible && (
                        <Fade top distance="20px" duration={1000}>
                          <article
                            className="menu__card"
                            style={{ '--menu-height': `${menuHeight}px` }}
                          >
                            <div>
                              {category.menu[0].name.map((nm, idx) => (
                                <div className="list_item" key={idx}>
                                  <div className="list_names">{nm}</div>
                                  <div className="list_price">{category.menu[0].price[idx]}</div>
                                </div>
                              ))}
                            </div>
                          </article>
                        </Fade>
                      )}
                    </div>
                  </article>
                </Fade>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Products;