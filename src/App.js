import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {

  //state de listado de productos
  const [items, saveItems] = useState([
    {id: 1, name: 'Camisa', price: 50},
    {id: 2, name: 'Pantalon', price: 40},
    {id: 3, name: 'Guantes', price: 25},
    {id: 4, name: 'Calcetines', price: 15},
  ]);

  //state de carrito
  const [cart, addItem] = useState([])


  //año actual
  const date = new Date().getFullYear();

  return (
    //lo que se muestra es lo que va dentro del return
    <Fragment>
      <Header
        title = 'Tienda Online'
      />

      <h1>Productos</h1>
      {items.map(item => (
        <Item
        key = {item.id}
        item = {item}
        cart = {cart}
        items = {items}
        addItem = {addItem}       
        />
      ))}
      

      <Cart
      
      cart = {cart}
      addItem = {addItem}
      
      />

      <Footer 
        date = {date}
      />
      
      </Fragment>
  );
}

export default App;
