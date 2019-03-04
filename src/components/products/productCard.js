import React from "react";
import "./productCard.scss";

const ProductCard = (props) => (
    <div className="product col-sm-12">
        <div className="row content">
            <div className="col-lg-8 col-md-12 text">
                <h2>{props.title}</h2>
                <div className="text">{props.children}</div>
            </div>
            <div className="col-lg-4 col-md-12 image">
                <img
                    alt="product"
                    src={props.image}
                />
            </div>
        </div>
    </div>
)

export default ProductCard;