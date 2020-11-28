import React from "react";
import data from '../shared/data';
import {Link} from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
function content() {
    let items = data.products.map((product) => {
        return (
            <VisibilitySensor>
            {( {isVisible} ) => (
            <Spring 
            from={{opacity : 0  }}
            to ={{opacity : isVisible? 0.9 : 0 }}
            config={{duration:300, delay:50}}
            >
                {props => (
                    <div style={props} className="col-12 col-sm-4 animated fadeInUp slower">
                    <div className="card">
                        <div className="card-img">
                            <img src={product.image}></img>
                        </div>
                        <div className="class-body text-center">
                            <h4 className="card-title">
                                {product.name}
                            </h4>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <button className="btn">
                                <Link to={product.name}>View more</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                 )}
            
            </Spring>
            )}
            </VisibilitySensor>
        )
    });
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {items}
                </div>
            </div>
        </>
    )
}

export default content;
