import Wrapper from "../Wrapper"

const CarDecoration = () => {
  return (
    <>
    <Wrapper>
    <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Car Decoration for Wedding</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <CarDecorationCard decorName="Audi Rose Bridal Car Decoration" mrp="₹5499" salePrice="₹4799" salePercantage="13%" src="cardecor1.webp" ratingPoint="4.9" reviewsCount="44" />
                    <CarDecorationCard decorName="Premium Wedding Car Decoration" mrp="₹11999" salePrice="₹13999" salePercantage="14%" src="cardecor2.webp" ratingPoint="4.7" reviewsCount="85" />
                    <CarDecorationCard decorName="Bridal Toyota Car Decoration" mrp="₹5499" salePrice="₹4399" salePercantage="20%" src="cardecor3.webp" ratingPoint="4.6" reviewsCount="32" />
                    <CarDecorationCard decorName="White Car Wedding Decoration" mrp="₹10999" salePrice="₹9999" salePercantage="9%" src="cardecor4.webp" ratingPoint="4.7" reviewsCount="71" />
                </div>
            </div>
            </Wrapper>
    </>
  )
}
  
export default CarDecoration

const CarDecorationCard = (props: any) => {
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