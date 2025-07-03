import Wrapper from "../Wrapper"

const BirthdayDecoration = (props:any) => {
    return (
        <>
         <Wrapper>
            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>{props.headingName || "Birthday Decoration"}  </h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    <BirthdayDecorationCard decorName="Simple Balloon Decor for Home" mrp="₹1999" salePrice="₹1499" salePercantage="25%" src="birthday1.webp" ratingPoint="4.9" reviewsCount="487" />
                    <BirthdayDecorationCard decorName="Rose Gold Birthday Home Decor" mrp="₹2299" salePrice="₹1999" salePercantage="13%" src="birthday2.webp" ratingPoint="4.9" reviewsCount="352" />
                    <BirthdayDecorationCard decorName="Adorable Birthday Arch Backdrop" mrp="₹3299" salePrice="₹2499" salePercantage="24%" src="birthday3.webp" ratingPoint="5" reviewsCount="325" />
                    <BirthdayDecorationCard decorName="Blush & Glow Birthday Theme" mrp="₹2499" salePrice="₹2199" salePercantage="12%" src="birthday4.webp" ratingPoint="4.9" reviewsCount="287" />
                </div>
            </div>
            </Wrapper>
        </>
    )
}

export default BirthdayDecoration

export const  BirthdayDecorationCard = (props: any) => {
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
