import React from 'react'
import './Footer.css'
import { assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo'/>
                <p>Savor the rich aroma and taste of freshly brewed coffee, delivered straight to your door for ultimate convenience. Enjoy this comforting experience anytime, anywhere, and let every sip bring a moment of pure indulgence to your day.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+84 123456789</li>
                    <li>contact@coffeeshop.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © CoffeeShop.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
