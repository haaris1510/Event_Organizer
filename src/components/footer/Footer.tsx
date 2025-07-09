import '../../css/Footer.scss'
import { allDecorOptions } from '../home/Home'
import { Link } from 'react-router-dom'
const Footer = () => {
    const decorCategories = [...new Set(allDecorOptions.map((item) => item.category))]
    console.log(decorCategories)
    return (
        <>
            <div className="main-footer-container ">
                <div className="footer-container container flex">
                    <div className="logo-box">
                        <img src="/logo.jpg" alt="" />
                        <p>India ka party expert</p>
                    </div>
                    <div className="important-links">
                        <div className="imp-link-heading">
                            <h3>Important Links</h3>
                            <div className="imp-links flex">
                                <a href="">Terms & Conditions</a>
                                <a href="">About Us</a>
                                <a href="">Disclaimer</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Cancellation Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="important-links top-categories">
                        <div className="imp-link-heading">
                            <h3>Top Categories</h3>
                            <div className="imp-links flex">
                                <a href="">Birthday</a>
                                <a href="">Anniversary</a>
                                <a href="">Baby Shower</a>
                                <a href="">Welcome Baby</a>
                                <a href="">Kids Theme</a>
                                <a href="">Balloon Decoration</a>
                                <a href="">First Night Decoration</a>
                                <a href="">Baby Ceremony Decoration</a>
                            </div>
                        </div>
                    </div>
                    <div className="important-links top-categories">
                        <div className="imp-link-heading">
                            <h3>Top Cities</h3>
                            <div className="imp-links flex">
                                <a href="">Bangalore</a>
                                <a href="">Mumbai</a>
                                <a href="">Delhi</a>
                                <a href="">Ahmedabad</a>
                                <a href="">Kolkata</a>
                                <a href="">Chennai</a>
                                <a href="">Hyderabad</a>
                                <a href="">Pune</a>
                            </div>
                        </div>
                    </div>
                    <div className="important-links top-categories">
                        <div className="imp-link-heading">
                            <h3>Info</h3>
                            <div className="imp-links flex">
                                <Link to='/contact-us'>Contact Us</Link>
                                <a href="">Sitemap</a>
                                <a href="">Our Recent Work</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary-footer ">
                <div className="secondary-wrapper container flex">
                    <div className="copyright">© 2025 Qoazy.com - All Rights Reserved</div>
                    <div className="social-links flex">
                        <a href=""><img className='social-img' src="facebook.webp" alt="" /></a>
                        <a href=""><img className='social-img' src="x.webp" alt="" /></a>
                        <a href=""><img className='social-img' src="instagram.webp" alt="" /></a>
                        <a href=""><img className='social-img' src="linkdin.webp" alt="" /></a>
                        <a href=""><img className='social-img' src="pinterest.webp" alt="" /></a>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
