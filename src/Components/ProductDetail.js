import React from "react";

function ProductDetail(props) {

  const starz = () => {
    const argument = props.products.rating;
    let arr = [<span className="glyphicon glyphicon-star-empty" key={0} />, <span className="glyphicon glyphicon-star-empty"key={1} />,<span className="glyphicon glyphicon-star-empty"key={2}/>, <span className="glyphicon glyphicon-star-empty"key={3}/>
    , <span className="glyphicon glyphicon-star-empty" key={4} />];
    for (let i = 0; i < argument; i++) {
      arr.unshift(<span className="glyphicon glyphicon-star" key={i} />);
    }
    return arr;
  };

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.products.imgUrl} alt=""/>
        <div className="caption">
          <h4 className="pull-right">{props.products.price}</h4>
          <h4><a href="#">{props.products.name}</a>
          </h4>
          <p>{props.products.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp-http://bootsnipp.com</a>
          </p>
          <div>

          </div>

        </div>
        <div className="ratings">
          <p className="pull-right">{props.products.reviews}</p>
          <p>
            <button onClick={()=> {
              props.increaseCart();
            }
            }>Add to Cart
            </button>
            {starz()}
          </p>
          {/*<p>{props.items}</p>*/}
        </div>
      </div>
    </div>

  );
}

export default ProductDetail;