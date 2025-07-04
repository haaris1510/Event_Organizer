import Wrapper from "../Wrapper"

const AnniversayDecoration = () => {
    return (
        <>
       
            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Romantic Anniversary Decoration</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <AnniversaryDecorationCard decorName="Anniversary Home Decoration" mrp="₹2199" salePrice="₹1999" salePercantage="9%" src="anniversary1.webp" ratingPoint="4.9" reviewsCount="487" />
                    <AnniversaryDecorationCard decorName="Red Anniversary Home Decor" mrp="₹2499" salePrice="₹2099" salePercantage="16%" src="anniversary2.webp" ratingPoint="4.8" reviewsCount="185" />
                    <AnniversaryDecorationCard decorName="Romantic Anniversary Room Celebration" mrp="₹2499" salePrice="₹2399" salePercantage="4%" src="anniversary3.webp" ratingPoint="4.4" reviewsCount="23" />
                    <AnniversaryDecorationCard decorName="Anniversary Bliss Setup" mrp="₹2999" salePrice="₹2499" salePercantage="17%" src="anniversary4.webp" ratingPoint="4.6" reviewsCount="255" />
                </div>
            </div>
        
        </>
    )
}

export default AnniversayDecoration

const AnniversaryDecorationCard = (props: any) => {
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

export const AnniversayDecorationWrapped = () => {
    return(
    <>
    <Wrapper>
        <AnniversayDecoration/>
    </Wrapper>
    </>
    )
}