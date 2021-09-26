import React from 'react';
import './AddedActor.css'

const AddedActor = (Props) => {
    const {name,img} = Props.actor
    return (
        <div className="actor-cart">           
           <img src={img} alt="" />          
            <div className="text">
                <h4>NAME: {name}</h4>
            </div>
        </div>
    );
};

export default AddedActor;