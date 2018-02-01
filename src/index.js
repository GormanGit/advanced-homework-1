import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


function increaseCart(){
  // console.log(state.numberOfItemsInCart);
  state.numberOfItemsInCart +=1;
  ReactDOM.render(
    <App items={state.numberOfItemsInCart} increaseCart={increaseCart} products={state.products} />,
    document.getElementById('root')
  );
}
ReactDOM.render(<App items={state.numberOfItemsInCart} increaseCart={increaseCart} products={state.products} />, document.getElementById('root'));
//this variabel "products" is equal to {state.products} and when using variable name "props"will preceed. i.e. props.product.