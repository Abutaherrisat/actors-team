import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import actorsData from '../data/fakeData'
import './Popular.css'

const Popular = () => {
    // set state part
    const [actors,setActors] = useState([])
    const [cart,setCart] = useState([])
    // loadFakeData part
    useEffect(() =>{
       setActors(actorsData);
    },[])
  
    const handleAddToCart = (actor) =>{
        // spread operator
        const newCart = [...cart, actor]       
        setCart([...new Set(newCart)]);
    }
    return (
        <div className = "popular-container">
            <div className="actors-container">
              <div className ="single-actor">
              {
                    actors.map(actor => <Actor
                    key = {actor.name}
                    actor = {actor}
                    handleAddToCart = {handleAddToCart}
                    >
                    </Actor>)
                }
            </div>
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>           
        </div>
    );
};

export default Popular;