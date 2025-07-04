import Wrapper from "../Wrapper"


const ShopandOfficeDecor = () => {
    return (
        <>
            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Shop and Office Decor</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <ShopandOfficeDecorationCard decorName="Cafe Opening Entrance Decoration" mrp="₹4099" salePrice="₹3199" salePercantage="22%" src="shopdecor1.webp" ratingPoint="4.4" reviewsCount="45" />
                    <ShopandOfficeDecorationCard decorName="Entrance Balloon Gate for Shop Opening" mrp="₹6999" salePrice="₹5499" salePercantage="21%" src="shopdecor2.webp" ratingPoint="4.8" reviewsCount="78" />
                    <ShopandOfficeDecorationCard decorName="Corporate Gala Balloon Decoration" mrp="₹12999" salePrice="₹10999" salePercantage="15%" src="shopdecor3.webp" ratingPoint="4.2" reviewsCount="30" />
                    <ShopandOfficeDecorationCard decorName="Shop Opening Decoration" mrp="₹3699" salePrice="₹2999" salePercantage="19%" src="shopdecor4.webp" ratingPoint="4.9" reviewsCount="84" />
                </div>
            </div>

        </>
    )
}

export default ShopandOfficeDecor

const ShopandOfficeDecorationCard = (props: any) => {
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
export const ShopandOfficeDecorWrapper = () => {
    return (
        <>
            <Wrapper>
                <ShopandOfficeDecor />
            </Wrapper></>)
}