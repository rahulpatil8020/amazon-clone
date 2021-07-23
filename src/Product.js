import './Product.css';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { useState } from 'react';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(count+1);
  }
  const subItem = () => {
    if(count>1){
    setCount(count-1);
    }
  }

  const addToBasket = () => {
    const index = basket.findIndex(
      (basketItem) => basketItem.id === id
    )
    if(index>=0){
      let ct = count + basket[index].count;
      dispatch({
        type: "UPDATE_COUNT_ON_ADD",
        item : {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          count: ct,
          index: index
        }
      })
    }else{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        count: count
      }
    })
  }
    alert(`Number of Items Added ${count}`)
    setCount(1)
  }
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className='product_starIcon' />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <div className="buttons">
        <button className="item__count" onClick={subItem}>-</button>

        <button className="product__add" onClick={addToBasket}>{count > 1 ? (count) : "Add To Basket"} </button>

        <button className="item__count" onClick={addItem}>+</button>
      </div>
    </div>
  );
}

export default Product;
