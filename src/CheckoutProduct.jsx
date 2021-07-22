import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
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
                <button onClick={removeFromBasket}>
                    Remove From Basket
                </button>
            </div>
        </div>


    );
}

export default CheckoutProduct
