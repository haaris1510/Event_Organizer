import '../../css/clientSection.scss'
import { CiLocationOn } from "react-icons/ci";

const ClientSection = () => {
    return (
        <>
            <div className="client-main-container container">
                <h3>Client Reviews</h3>
                <div className="review-section flex">
                    <div className="review flex">
                        <p>Thank you for the decoration. It was nicely done and everyone loved it. Very cooperative and budget friendly</p>
                        <div className="review-detail flex">
                            <p className='review-name-img flex'>A</p>
                            <div className="reviewer-name">
                                <p className='name'>Atharv Surana</p>
                                <div className="address flex"><CiLocationOn /> <p>Bhopal</p></div>
                            </div>
                            <div className="client-review-rating flex "><img className='star-img' src="star.png" alt="" /> <p>(4.9)</p></div>
                        </div>
                    </div>
                    <div className="review flex">
                        <p>I have contacted this vendor just a day before my kid’s birthday and they have done an awesome job. Loved this whole decor. Staff were so cooperative and helpful.</p>
                        <div className="review-detail flex">
                            <p className='review-name-img flex'>S</p>
                            <div className="reviewer-name">
                                <p className='name'>Sourav Dugar</p>
                                <div className="address flex"><CiLocationOn /> <p>Thane</p></div>
                            </div>
                            <div className="client-review-rating flex "><img className='star-img' src="star.png" alt="" /> <p>(4.5)</p></div>
                        </div>
                    </div>
                    <div className="review flex">
                        <p>Great Job Done.. Extremely Professional, Reasonable and great at work.. You get what you ask for and little more delights. Looking forward to more work together..</p>
                        <div className="review-detail flex">
                            <p className='review-name-img flex'>S</p>
                            <div className="reviewer-name">
                                <p className='name'>Simran Nigam</p>
                                <div className="address flex"><CiLocationOn /> <p>Ahmedabad</p></div>
                            </div>
                            <div className="client-review-rating flex "><img className='star-img' src="star.png" alt="" /> <p>(4.8)</p></div>
                        </div>
                    </div>
                    <div className="review flex">
                        <p>Very beautiful balloon decoration in minimum time. Decoration was on point. Will recommend you to all my friends and families.</p>
                        <div className="review-detail flex">
                            <p className='review-name-img flex'>M</p>
                            <div className="reviewer-name">
                                <p className='name'>Myra Suri</p>
                                <div className="address flex"><CiLocationOn /> <p>Thane</p></div>
                            </div>
                            <div className="client-review-rating flex "><img className='star-img' src="star.png" alt="" /> <p>(4.5)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientSection
