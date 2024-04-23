import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return(

            <footer className="py-2 px-5 mb-0" style={{backgroundColor:"lightgray"}}>
                <div className="row my-4">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#"
                                                             className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input style={{width: "500px"}}  id="newsletter1" type="text" className="form-control"
                                       placeholder="Email address"/>
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-m-row justify-content-between py-1 my-1 mb-0 border-top">
                    <p className="">© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#">
                            <svg className="bi" width="24" height="24">
                                <use xlinkHref="#twitter"></use>
                            </svg>
                        </a></li>
                        <li className="m-3"><a className="link-body-emphasis" href="#">
                                 <IoLogoInstagram />
                        </a></li>
                        <li className="m-3"><a className="link-body-emphasis" href="#">
                            <FaFacebook />
                        </a></li>
                    </ul>
                </div>
            </footer>


    )

    }

export default Footer;