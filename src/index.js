import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

ReactDOM.render(<App products={state.products} />, document.getElementById('root'));
//this variabel "products" is equal to {state.products} and when using variable name "props"will preceed. i.e. props.product.