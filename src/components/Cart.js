import React from 'react';
import './cart.css'
import Item from './Item';
 
const Cart = ({cart, addItem}) => {
    return ( 
        <div className = "cart">
            <h2> Tu carrito</h2>

            {cart.length === 0
            
            ?
                <p>No hay elementos</p>

            : cart.map(item =>(
                <Item 
                key = {item.id}
                item = {item}
                cart = {cart}
                addItem = {addItem}
                />
            ))
            }
        </div>
     );
}
 
export default Cart;