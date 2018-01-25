import React from "react";


function ProductDetail(props) {
  // console.log(props.product.price)
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt=""/>
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4><a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp-http://bootsnipp.com</a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.description}</p>
          <p>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
          </p>
        </div>
      </div>
    </div>

  );
}

export default ProductDetail;