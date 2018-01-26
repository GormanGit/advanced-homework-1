import React from "react";


function ProductDetail(props) {
  // newArray=[]
  // newImages = ["http://www.simonstalenhag.se/bilder/bio_thepin.jpg", "http://www.simonstalenhag.se/bilder/theflood1.jpg", "http://www.simonstalenhag.se/bilder/peripheral2.jpg"];
  // const something = newImages.map(pics => {
  //   push.newArray(newImages);
  //   // "http://placehold.it/320x150"
  // })
  // src="http://placehold.it/320x150" alt=""
  console.log(props)
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.products.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.products.price}</h4>
          <h4><a href="#">{props.products.name}</a>
          </h4>
          <p>{props.products.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp-http://bootsnipp.com</a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.products.reviews}</p>
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