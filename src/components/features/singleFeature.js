import React from "react";

import "./singleFeature.scss";

const SingleFeature = (props) => (
    <div className={ props.color ? "singleFeature col-sm-12 color" : "singleFeature col-sm-12" }>
        <div className="row content">
            <div 
                className="col-lg-8 col-md-8 col-sm-12 text" 
                style={ props.orientation === 'right' ? { order: 2 } : { order: 1 } }>
                <h2>{props.title}</h2>
                <div className="text">{props.children}</div>
            </div>
            <div 
                className="col-lg-4 col-md-4 col-sm-12 image d-flex align-items-center justify-content-center"
                style={ props.orientation === 'right' ? { order: 1 } : { order: 2 } }>
                <img
                    src={props.image}
                    alt="Feature"
                />
            </div>
        </div>
    </div>
)

export default SingleFeature;