import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare ,faTwitter} from '@fortawesome/free-brands-svg-icons'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Actor.css'

const Actor = (Props) => {
    // distructuring part
    const { name, age, img, salary, religion, country, faceBook,twitter } = Props.actor
    const handleAddToCart = Props.handleAddToCart
    // font awesom part
    const shoppinCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="actor-container">
            <img src={img} alt="" />
            <div className="text">
                <h4>NAME: {name}</h4>
                <h4>AGE: {age}</h4>
                <h4>COUNTRY: {country}</h4>
                <h4>RELIGION: {religion}</h4>
                <h4>SALARY: ${salary}</h4>
                <button className="btn-regular" onClick={() => handleAddToCart(Props.actor)}   >{shoppinCart} Add To Cart</button>
            </div>
            <div className='anchor-container'>
                <a target='_blank' href={faceBook}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a target='_blank' href={twitter}><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    );
};

export default Actor;