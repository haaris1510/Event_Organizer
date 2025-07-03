import Wrapper from "../Wrapper"


const BacheloretteDecoration = () => {
    return (
        <>
        <Wrapper>
            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Bachelorette Party</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <BacheloretteDecorationCard decorName="Bride to be Party Decoration" mrp="₹2799" salePrice="₹2599" salePercantage="7%" src="bachelorette1.webp" ratingPoint="4.6" reviewsCount="130" />
                    <BacheloretteDecorationCard decorName="Bride to be Ring Decoration" mrp="₹7499" salePrice="₹6999" salePercantage="7%" src="bachelorette2.webp" ratingPoint="4.8" reviewsCount="85" />
                    <BacheloretteDecorationCard decorName="Simple Bachelorette Wall Arch" mrp="₹2699" salePrice="₹2299" salePercantage="15%" src="bachelorette3.webp" ratingPoint="4.9" reviewsCount="13" />
                    <BacheloretteDecorationCard decorName="Simple Bachelorette Decoration" mrp="₹2099" salePrice="₹1799" salePercantage="14%" src="bachelorette4.webp" ratingPoint="4.6" reviewsCount="91" />
                </div>
            </div>
            </Wrapper>
        </>
    )
}

export default BacheloretteDecoration

const BacheloretteDecorationCard = (props: any) => {
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