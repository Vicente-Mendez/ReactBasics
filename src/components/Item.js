import React from 'react';

const Item = ({item, cart, addItem, items}) => {

    const { name, price, id} = item

    //agregar elementos al carrito
    const selectItem = (id) => {
        const item = items.filter(item => item.id === id)[0];
        addItem([ //... clona el estado
            ...cart,
            item
        ]);
    }

    //eliminar elemento del carro
    const deleteItem = (id) => {
        const items = cart.filter(item => item.id !== id)

        //colocar los elementos en state
        addItem(items)
    }


    return ( 
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            
            {items 
            ?
                (
                    <button 
                    type="button"
                    onClick={() => selectItem(id) }
                    >Comprar</button>   
                )
            :
                    (
                        <button 
                        type="button"
                        onClick ={() => deleteItem(id)}
                        >Eliminar</button>    
                    )
            }
        </div>
     );
}
 
export default Item;