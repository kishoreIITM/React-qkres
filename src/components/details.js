import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import {Link} from 'react-router-dom';
import data from "../shared/data";
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
class details extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        let type = this.props.type;
        if (data[type].length > 0){
            let items = data[type].map((product) => {
                return (
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: isVisible ? 0.9 : 0 }}
                                config={{ duration: 300, delay: 50 }}
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
                                                    <Link to={product.name}>Add to Cart  <span className="fa fa-shopping-cart"></span></Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
    
                            </Spring>
                        )}
                    </VisibilitySensor>
                )}
                );
        
            
            return (
                <> 
                 <div className="container">
                     <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/">Categories</Link> 
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                    {type}
                    </BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                   
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {items}
                        </div>
                    </div>
                </>
            )
        }
        else{
            return(
                <div className="container">
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/">Categories</Link> 
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                    {type}
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <h3 className="text-center">Sorry!! All items sold</h3>
                </div>
            )
        }
        
            
        }}


export default details;;