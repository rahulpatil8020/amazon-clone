import { InsertComment } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./components/Subtotal";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            count = {item.count}
                        />
                    )
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
