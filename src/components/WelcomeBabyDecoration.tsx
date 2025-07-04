import '../css/decorationCards.scss'
import Wrapper from '../Wrapper'

const WelcomeBabyDecoration = () => {
    return (

        <>

            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Welcome Baby Decoration</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <WelcomeBabyCard decorName="Welcome Baby Princess Decoration" mrp="₹4499" salePrice="₹3899" salePercantage="13%" src="welcome-baby1.webp" ratingPoint="4.9" reviewsCount="487" />
                    <WelcomeBabyCard decorName="Baby Homecoming Setup" mrp="₹4499" salePrice="₹3899" salePercantage="13%" src="welcome-baby2.webp" ratingPoint="4.9" reviewsCount="352" />
                    <WelcomeBabyCard decorName="Welcome Balloon Setup" mrp="₹2399" salePrice="₹1999" salePercantage="17%" src="welcome-baby3.webp" ratingPoint="5" reviewsCount="325" />
                    <WelcomeBabyCard decorName="Simple Welcome Balloon Decoration" mrp="₹2099" salePrice="₹1699" salePercantage="19%" src="welcome-baby4.webp" ratingPoint="4.9" reviewsCount="287" />
                </div>
            </div>

        </>
    )
}

export default WelcomeBabyDecoration



const WelcomeBabyCard = (props: any) => {
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

export const WelcomeBabyDecorationWrapper = () => {
    return (
        <>
            <Wrapper>
                <WelcomeBabyDecoration />
            </Wrapper>
        </>)
} 
