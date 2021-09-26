import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import AddedActor from '../AddedActor/AddedActor';


const Cart = (Props) => {
    const { cart } = Props
    let total = 0
    for (const actor of cart) {
        total = total + actor.salary
    }
    const user = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="cart-style">
            <div className = " actor-added">
            <h3>{user} Actors Added :{Props.cart.length}</h3>
            <h3>total Cost :${total}</h3>
            </div>
            <div className='added-actors'>
                {

                    cart.map(actor => <AddedActor actor={actor}></AddedActor>)
                }
            </div>


        </div>
    );
};

export default Cart;