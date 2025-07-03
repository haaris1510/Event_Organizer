import Wrapper from "../Wrapper"

const BabyShowerDecoration = () => {
    return (
        <>
        <Wrapper>
            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Baby Shower Decoration</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <BabyShowerCard decorName="Dreamy Baby Shower Balloons" mrp="₹3299" salePrice="₹2999" salePercantage="9%" src="baby-shower1.webp" ratingPoint="4.9" reviewsCount="487" />
                    <BabyShowerCard decorName="Baby Homecoming Setup" mrp="₹4499" salePrice="₹3899" salePercantage="13%" src="baby-shower2.webp" ratingPoint="4.9" reviewsCount="352" />
                    <BabyShowerCard decorName="Welcome Balloon Setup" mrp="₹2399" salePrice="₹1999" salePercantage="17%" src="baby-shower3.webp" ratingPoint="5" reviewsCount="325" />
                    <BabyShowerCard decorName="Simple Welcome Balloon Decoration" mrp="₹2099" salePrice="₹1699" salePercantage="19%" src="baby-shower4.webp" ratingPoint="4.9" reviewsCount="287" />
                </div>
            </div>
            </Wrapper>
        </>
    )
}

export default BabyShowerDecoration
const BabyShowerCard = (props: any) => {
    return (
        <>
            <div className="baby-card flex">
                <div className="baby-card-main-container flex">
                    <div className="img-wrapper">
                        <img className='card-img' src={props.src} alt="" />
                        <div className="ratings flex"><p className='rating-point'>{props.ratingPoint}</p><img className='star-img' src="star.png" alt="" /> <p>({props.reviewsCount})</p></div>
                    </div>
                    <div className="baby-card-name"><p>{props.decorName}</p></div>
                    <div className="baby-decor-price-container flex">
                        <p className='sale-price'>{props.salePrice}</p>
                        <p className='mrp-price'>{props.mrp}</p>
                        <div className="sale-off"><p>{props.salePercantage} off</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}