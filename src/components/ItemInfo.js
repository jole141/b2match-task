import React from "react";
import ItemDiv from "../styled-components/ItemDiv";
import { Link } from "react-router-dom";

const ItemInfo = () => {
  const productData = JSON.parse(localStorage.getItem("itemState"));

  return (
    <ItemDiv>
      <div className="container">
        <h1 className="my-4">{productData.name}</h1>
        <div className="row">
          <div className="col-md-8 text-center shadow p-3 mb-5 bg-white rounded">
            <img
              className="img-fluid"
              src={productData.image_link}
              alt="product"
              width="500px"
            />
          </div>
          <div className="col-md-4">
            <h3 className="my-3">Product Description</h3>
            <p>{productData.description}</p>
            <ul className="rating-component">
              <li>
                <b>Rating: </b>
              </li>
              {productData.rating !== null ? (
                <li className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: (productData.rating / 5) * 100 + "%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </li>
              ) : (
                <li>Not avaliable</li>
              )}
              <li>{productData.rating} / 5</li>
            </ul>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
            <button
              onClick={() => {
                window.open(productData.product_link, "_blank");
              }}
              type="button"
              className="btn btn-dark"
            >
              Buy now
            </button>
            <h2 className="my-3  px-2">Price: ${productData.price}</h2>
          </div>
        </div>
      </div>
    </ItemDiv>
  );
};

export default ItemInfo;
