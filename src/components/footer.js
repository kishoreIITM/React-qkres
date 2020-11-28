import React,{useEffect} from 'react';

function footer() {
    return (
        <div>
            <footer>
                <div class="container">
                  <div class="row">
                      <div class="col-5 col-sm-4 align-self-center">
                          <ul class="list-unstyled ml-2">
                              <li><a href="#">Home</a></li>
                              <li><a href="https://www.qkres.com/about-us">About Us</a></li>
                              <li><a href="https://www.qkres.com/facilities-services">Facilities & Services</a></li>
                              <li><a href="https://www.qkres.com/business-opportunities">Business Oppurtunities</a></li>
                              <li><a href="https://www.qkres.com/contact-us">Contact</a></li>
                          </ul>
                      </div>
                      <div class="col-7 col-sm-4 text-center">
                          <h5>Address</h5>
                          <address>
                              Chennai, Tamilnadu - 600036
                              <br>
                              </br>
                              <span class="fa fa-phone"></span> : 8925741780<br></br>
                              <span class="fa fa-envelope"></span><a href="mailto:contact@qkres.com"> : contact@qkres.com</a>
                           </address>
                       </div>
                            <div class="col-11 col-sm-4 align-self-center">
                                <div class="text-center">
                                    <a href="https://www.facebook.com/QkResTechnologies/"><i class="fa fa-facebook fa-lg mr-3"> </i></a>
                                    <a href="https://www.linkedin.com/in/qkres-technologies-and-research-a25a571b1/?originalSubdomain=in"><i class="fa fa-linkedin fa-lg mr-3"> </i></a>
                                    <a href="mailto:contact@qkres.com"><i class="fa fa-envelope fa-lg"> </i></a>
                                </div>
                            </div>
                            </div>
                            <div class="footer-copyright text-center py-3">Copyright © 2020 Qkres Technologies and Research
                        </div>
                        </div>
                    </footer>
                </div>

    )
}
export default footer;