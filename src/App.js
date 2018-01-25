import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import Carousel from "./Components/Carousel";

function App(props) {
  const productMap = (props) => {
    props.product.products.map(
      
    )
    console.log(props.product.products[0]);
  };productMap(props);

    // console.log(props)
  return (
    <div className="App">

      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

          {/*{Header Goes Hear}*/}
          <Header />


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

        </div>

      </nav>


      <div className="container">

        <div className="row">

          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>

          <div className="col-md-9">
            <Carousel />

            <div className="row">
              <ProductDetail product={props.product.products[0]} />
              <ProductDetail product={props.product.products[1]} />
              <ProductDetail product={props.product.products[2]} />
              <ProductDetail product={props.product.products[3]} />
              <ProductDetail product={props.product.products[4]} />
              <ProductDetail product={props.product.products[5]} />

              {/*<div className="col-sm-4 col-lg-4 col-md-4">*/}
                {/*<h4><a href="#">Like this template?</a>*/}
                {/*</h4>*/}
                {/*<p>If you like this template, then check out <a target="_blank"*/}
                                                                {/*href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this*/}
                  {/*tutorial</a> on how to build a working review system for your online store!</p>*/}
                {/*<a className="btn btn-primary" target="_blank"*/}
                   {/*href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View*/}
                  {/*Tutorial</a>*/}
              {/*</div>*/}

            </div>

          </div>

        </div>

      </div>

      <div className="container">

        <hr />

        <Footer />


      </div>
    </div>
  );
}

export default App;