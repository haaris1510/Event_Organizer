import Wrapper from "../Wrapper"
import { Link } from "react-router-dom"

// export const carDecorOptions = [{
//     id: 1,
//     slug: "audi-rose-car-decor",
//     name: "Audi Rose Bridal Car Decoration",
//     mrp: "₹5499",
//     salePrice: "₹4799",
//     salePercentage: "13%",
//     src: "cardecor1.webp",
//     rating: "4.9",
//     reviews: "44",
//     category: "car-decor",
// },
// {
//     id: 2,
//     slug: "premium-wedding-car-decor",
//     name: "Premium Wedding Car Decoration",
//     mrp: "₹13999",
//     salePrice: "₹11999",
//     salePercentage: "14%",
//     src: "cardecor2.webp",
//     rating: "4.7",
//     reviews: "85",
//     category: "car-decor",
// },
// {
//     id: 3,
//     slug: "bridal-toyota-car-decor",
//     name: "Bridal Toyota Car Decoration",
//     mrp: "₹5499",
//     salePrice: "₹4399",
//     salePercentage: "20%",
//     src: "cardecor3.webp",
//     rating: "4.6",
//     reviews: "32",
//     category: "car-decor",
// }, {
//     id: 4,
//     slug: "white-car-wedding-decor",
//     name: "White Car Wedding Decoration",
//     mrp: "₹10999",
//     salePrice: "₹9999",
//     salePercentage: "9%",
//     src: "cardecor4.webp",
//     rating: "4.7",
//     reviews: "71",
//     category: "car-decor",
// }
// ]
import { allDecorOptions } from "./Home"
const CarDecoration = () => {
    const carDecorProducts = allDecorOptions.filter((item) => item.category === "cardecor")
    return (
        <>

            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>Car Decoration for Wedding</h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    {carDecorProducts.map((item) => {
                        return (
                            <CarDecorationCard key={item.slug} {...item} />

                            // decorName={item.name}
                            //     mrp={item.mrp}
                            //     salePrice={item.salePrice}
                            //     salePercantage={item.salePercentage}
                            //     src={item.src}
                            //     ratingPoint={item.rating}
                            //     reviewsCount={item.reviews} />
                        )
                    })}
                    {/* <CarDecorationCard decorName="Audi Rose Bridal Car Decoration" mrp="₹5499" salePrice="₹4799" salePercantage="13%" src="cardecor1.webp" ratingPoint="4.9" reviewsCount="44" />
                    <CarDecorationCard decorName="Premium Wedding Car Decoration" mrp="₹13999" salePrice="₹11999" salePercantage="14%" src="cardecor2.webp" ratingPoint="4.7" reviewsCount="85" />
                    <CarDecorationCard decorName="Bridal Toyota Car Decoration" mrp="₹5499" salePrice="₹4399" salePercantage="20%" src="cardecor3.webp" ratingPoint="4.6" reviewsCount="32" />
                    <CarDecorationCard decorName="White Car Wedding Decoration" mrp="₹10999" salePrice="₹9999" salePercantage="9%" src="cardecor4.webp" ratingPoint="4.7" reviewsCount="71" /> */}
                </div>
            </div>

        </>
    )
}

export default CarDecoration

const CarDecorationCard = (props: any) => {
    return (
        <>
            <Link to={`/${props.category}/${props.slug}`}>
                <div className="baby-card flex">
                    <div className="baby-card-main-container flex">
                        <div className="img-wrapper">
                            <img className='card-img' src={props.src} alt="" />
                            <div className="ratings flex"><p className='rating-point'>{props.rating}</p><img className='star-img' src="star.png" alt="" /> <p>({props.reviews})</p></div>
                        </div>
                        <div className="baby-card-name"><p>{props.name}</p></div>
                        <div className="baby-decor-price-container flex">
                            <p className='sale-price'>{props.salePrice}</p>
                            <p className='mrp-price'>{props.mrp}</p>
                            <div className="sale-off"><p>{props.salePercentage} off</p></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export const CarDecorationWrapper = () => {
    return (
        <>
            <Wrapper>
                <CarDecoration />
            </Wrapper>
        </>)
}