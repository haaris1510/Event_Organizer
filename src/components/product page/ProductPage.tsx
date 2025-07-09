import { useState } from 'react';
import '../../css/ProductPage.scss'
import { FaArrowRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineRateReview } from "react-icons/md";
import BirthdayDecoration from '../categories/BirthdayDecoration';

import { useParams } from 'react-router-dom';
import Wrapper from '../../wrapper/Wrapper';
import { allDecorOptions } from '../home/Home';

const tabContent: any = {
    "Package Inclusion": [
        "50 Balloons on Ceiling",
        "50 Balloons on Floor",
        "Happy Birthday Foil",
        "Frill Ribbons",
    ],
    "Delivery Details": [
        "The image displayed is indicative in nature.",
        "Actual product may vary in shape, colour or design as per the availability.",
        "Our balloon expert will come to your home at your chosen slot, and set up the balloons as shown in the images.",
        "You'll need to provide a stool to reach the ceiling.",
        "We can decorate a hotel room if you gain permission from the hotel.",
        "All the items used in the decoration are on rental basis and will be taken back on the next day of the event.",
        "If case of a complaint, notice must be given within 2 hours of the delivery time of the experience.",
        "No rescheduling or cancellation is possible after the decoration has been attempted.",
    ],
    "Care Info": [
        "Avoid Direct Sunlight: Keep the balloons away from direct sunlight or excessive heat to prevent them from popping or deflating.",
        "Indoor Placement Preferred: For longer-lasting decoration, place the balloons indoors in a cool and dry environment.",
        "Avoid Sharp Objects: Keep balloons away from sharp objects, rough surfaces, and pets to prevent accidental popping.",
        "Supervise Children: Balloons can be a choking hazard; keep an eye on young children around the decoration.",
        "Longevity: Latex balloons typically last 8–12 hours when air-filled and up to 24 hours with helium; foil balloons last longer.",
        "Handle with Care: While moving or rearranging decorations, handle the balloons gently to avoid damage.",
    ],
    FAQs: [
        "Q: How early should I book the decoration?",
        "A: At least 24 hours in advance is recommended.",
        "Q: Will the decorator clean up after?",
        "A: No, cleanup is not part of the service.",
    ],
};
const ProductPage = () => {
    const { slug } = useParams()
    const product = allDecorOptions.find((item) => item.slug === slug)
    if (!product) {
        return <p>Product not found </p>
    }
    console.log(product)

    return (
        <>
            <Wrapper>
                <div className="main-product-page-container container flex">
                    <div className="product-images-div flex">
                        <div className="small-img-box-container flex">
                            <div className="small-img"><img src={`/${product.src}`} alt="" /></div>
                            <div className="small-img"><img src={`/${product.src}`} alt="" /></div>
                        </div>
                        <div className="product-large-img-box">
                            <img src={`/${product.src}`} alt="" />
                            <div className="bestseller">Best Seller</div>
                        </div>
                    </div>
                    <div className="product-details-container flex">
                        <div className="product-details flex">
                            <h3>{product.name}</h3>
                            <div className="product-prices-div flex">
                                <p className='product-sale-price'>{product.salePrice}</p>
                                <p className='product-mrp-price'>{product.mrp}</p>
                                <p className='product-sale'>{product.salePercentage}</p>
                            </div>
                            <p className='charges'>Inclusive of all charges</p>
                            <div className="product-ratings flex"><img className='star-img' src="/star.png" alt="" />
                                <p className='ratings-prod'>{product.rating}</p>
                                <p className='reviews-count-prod'>{product.reviews} Reviews</p></div>
                            <div className="more-products flex">
                                <p>View More in this Category</p> <FaArrowRight />
                            </div>
                        </div>
                        <div className="select-city-container">
                            <h3>Select Your City</h3>
                            <div className="icon-wrapper-input">
                                <div className="icon flex"><img src="/gps.png" alt="" /></div>
                                <input className='city-input' type="text" placeholder='Type your city name...' />
                            </div>
                            <div className="date-time-div flex">
                                <SlCalender /> <p>Date and Time will be taken in the next step</p>
                            </div>
                        </div>
                        <div className="choose-balloon-color-container">
                            <h3>Choose Your Balloon Colors</h3>
                            <select className='balloon-color' name="Select Same as" id="color">
                                <option value="">Select Same as Image (Default)</option>
                                <option value="black-white">Black,White</option>
                                <option value="blue-white">Blue,White</option>
                                <option value="multicolors">Multicolors</option>
                                <option value="silver-white-black">Silver,White,Black</option>
                                <option value="red-white">Red,White</option>
                                <option value="white-golden">White,Golden</option>
                                <option value="blue-white">Blue,White</option>
                                <option value="pink-blue">Pink,Blue</option>
                            </select>
                            <div className="other-color flex">
                                <p>Any Other Color? <span>Click Here</span></p>

                            </div>
                        </div>
                        {/* <div className="info-details-container">
                        <div className="info-details flex">
                            <button>Package Inclusion</button>
                            <button>FAQs</button>
                            <button>Delivery Details</button>
                            <button>Care Info</button>
                        </div>
                        <div className="package-bullet-points">
                            <div className="points flex">
                                <ul><li>50 Balloons on Ceiling</li>
                                    <li>50 Balloons on Floor</li>
                                    <li>Happy Birthday Foil</li>
                                    <li>Frill Ribbons</li></ul>

                            </div>
                        </div>
                    </div>  */}
                        <InfoTabs />

                        <div className="booking-container">
                            <div className="offer flex"><span className='offer-logo flex'><BiSolidOffer /></span><p>Get upto <span className='bold'>₹200</span> off <span className='gray-light'>T&C</span></p></div>
                            <div className="buttons-container flex">
                                <button className='whatsapp-btn flex'><img src="/whatapp.webp" alt="" />Whatsapp Us</button>
                                <button className='book-now-btn'>Book Now</button>
                            </div>
                        </div>
                        <div className="brand-values-wrapper">
                            <div className="brand-values flex">
                                <div className='decor-brand-wrapper'>
                                    <div className="decor-brand flex">
                                        <span className='span-most flex'>India's Most Trusted</span> <img src='/shield.png' className='shield-img'></img>
                                    </div>
                                    <div className="home-decor-brand">Home Decor Brand </div>
                                </div>
                                <div className="services-points flex">
                                    <span className='services-points-flex flex'><IoMdCheckmarkCircleOutline className='check' /> Same Day Service</span>
                                    <span className='services-points-flex flex'><IoMdCheckmarkCircleOutline className='check' /> Professional Decorators</span>
                                    <span className='services-points-flex flex'><IoMdCheckmarkCircleOutline className='check' /> Lowest Price Guaranteed</span>
                                    <span className='services-points-flex flex'><IoMdCheckmarkCircleOutline className='check' /> 10 Lacs+ Trusted Users</span>
                                </div>

                            </div>
                            <div className="recent-works flex">
                                View Our Recent Works <GoArrowRight />
                            </div>
                        </div>
                        <div className="ratings-container">
                            <p className='rating-head'>Rating</p>
                            <div className="rating-review flex">
                                <div className="rating-counter flex">
                                    <p className='rating-number'>4.9 <img className='star-img' src="/star.png" alt="" /> </p>
                                    <p className='total-ratings'>487 Ratings</p>
                                </div>

                                <div className="write-a-review-box flex">
                                    <a className='write-review-text' href="">Write a review <MdOutlineRateReview /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <BirthdayDecoration headingName="Similar Products" />
                <BirthdayDecoration headingName="Related Products" />
            </Wrapper>
        </>
    )
}

export default ProductPage

const InfoTabs = () => {
    const [activeTab, setActiveTab] = useState("Package Inclusion")
    console.log(Object.keys(tabContent))
    return (
        <>
            <div className="info-details-container">
                <div className="info-details flex">
                    {Object.keys(tabContent).map((tab) => (
                        <button key={tab} className={activeTab === tab ? "active-tab" : ""}
                            onClick={() => setActiveTab(tab)}> {tab}</button>

                    ))}
                </div>
                <div className="package-bullet-points">
                    <div className="points flex">
                        <ul>
                            {tabContent[activeTab].map((point: any, index: any) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
// function infoTabs () {
//  const [activeTab,setActiveTab] =useState("Package Inclusion")
//  return(
//     <div className="info-details-container">
//         <div className="info-details flex">
//             {Object.keys(tabContent).map((tab)=>(
//                 <button key={tab} className={activeTab === tab ? "active-tab" : ""}
//                 onClick={()=> setActiveTab(tab)}> {tab}</button>

//             ))}
//         </div>
//         <div className="package-bullet-points">
//             <div className="points flex">
//                 <ul>
//                     {tabContent [activeTab].map((point:any,index:any) => (
//                         <li key={index}>{point}</li>
//                     ) )}
//                 </ul>
//             </div>
//         </div>
//     </div>

//  )
// }