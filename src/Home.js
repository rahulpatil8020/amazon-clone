import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          //   src='https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg'
          alt=''
        />

        <div className='home_row'>
          <Product
            id='3477543'
            title="XTEP Men's Hi-Fashion Breathable Fabric Upper AirMega Running Shoes"
            price= {6999.89}
            image='https://m.media-amazon.com/images/I/81RMWCdHoRL._AC_SX200_SY161_QL70_.jpg'
            rating={4}
          />
          <Product
            id='3457935'
            title='Lenovo Legion 5Pi 10th Gen Intel Core i7 15.6" FHD Gaming Laptop '
            price= {134990.99}
            image='https://m.media-amazon.com/images/I/61pW8BWBq1L._AC_UY218_.jpg'
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='5690848'
            title='Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)'
            price={3999.99}
            image='https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_FMwebp_QL70_.jpg'
            rating={3}
          />
          <Product
            id='475839'
            title='LG 14 Place Settings Dishwasher (DFB424FW, White color)'
            price={58999.99}
            image='https://images-eu.ssl-images-amazon.com/images/I/316D1RTT-yL._AC_US160_FMwebp_QL70_.jpg'
            rating={5}
          />
          <Product
            id='495934'
            title='AmazonBasics Water Repellant Shower Curtain with Hooks - 72" x 72", Gray Stripe'
            price={599.99 }
            image='https://m.media-amazon.com/images/I/81v8JAWL4OL._AC_UL320_.jpg'
            rating={2}
          />
        </div>

        <div className='home_row'>
          <Product
            id=' 834874'
            title='Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)'
            price={3499.99 }
            image='https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SY355_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
