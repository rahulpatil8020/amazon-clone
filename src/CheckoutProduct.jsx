import React, { useState } from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, count}) {

    

    const [{ basket }, dispatch] = useStateValue();

    const itemIndex = basket.findIndex(
        (basketItem) => basketItem.id === id);

    const addItem = () => {
        let temp = basket[itemIndex].count + 1;
        updateItemCount(temp);
    }
    const subItem = () => {          
        let temp = basket[itemIndex].count - 1 
        if (temp === 0){
            removeFromBasket();
        }
        else {
            updateItemCount(temp);
        }
    }

    const updateItemCount = (temp) => {
        dispatch({
            type: "CHANGE_ITEM_COUNT", 
            id:id,
            count: temp,
        });
    }

    const removeFromBasket = () =>{
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkout__product">
            <img className="checkout__product__image" src={image} />
            <div className="checkout__product__info">
                <p className="checkout__product__title">
                    {title}
                </p>
                <p className="checkout__product__price">
                    <small>
                        $
                    </small>
                    <strong>
                        {price}
                    </strong>
                </p>
                <div className="checkout__product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>
                                <StarIcon className='product_starIcon' />
                            </p>
                        ))}
                </div>
                <strong>{basket[itemIndex].count}</strong>
                <div className="checkout__buttons">
                <button className="item__count" onClick={subItem}>-</button>
                <button className="remove__all" onClick={removeFromBasket}>
                    Remove All Basket
                </button>
                <button className="item__count" onClick={addItem}>+</button>
                </div>
            </div>
        </div>


    );
}

export default CheckoutProduct
