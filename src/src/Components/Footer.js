import {IoLogoInstagram} from "react-icons/io5";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import '../CSS/Footer.css';
import logo from '../images/logo_1_no_bg.png';


const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-links">
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms-of-use" className="footer-link">Terms of Use</a>
                    </div>
                    <div className="rights-reserved">
                        &copy; {new Date().getFullYear()} Smile. All rights reserved.
                    </div>
                </div>
                <div className="footer-middle">
                    <h2>Travel</h2>
                    <h4>&</h4>
                    <h2>Smile</h2>
                </div>
                <div className="footer-right">
                    <a href="https://facebook.com" className="social-icon"><FaFacebook/></a>
                    <a href="https://twitter.com" className="social-icon"><FaTwitter/></a>
                    <a href="https://instagram.com" className="social-icon"><FaInstagram/></a>
                </div>
            </div>
        </footer>


    )

}

export default Footer;