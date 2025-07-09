import { Link } from "react-router-dom"
import Wrapper from "../../wrapper/Wrapper"
import { allDecorOptions } from "../home/Home"

// export const birthdayDecorOptions = [{




//     id: 1,
//     slug: "simple-balloon-decor",
//     name: "Simple Balloon Decor for Home",
//     mrp: "₹1999",
//     salePrice: "₹1499",
//     salePercentage: "25%",
//     src: "birthday1.webp",
//     rating: "4.9",
//     reviews: "487",
//     category: "birthday",
// },
// {
//     id: 2,
//     slug: "rose-gold-birthday-decor",
//     name: "Rose Gold Birthday Home Decor",
//     mrp: "₹2299",
//     salePrice: "₹1999",
//     salePercentage: "13%",
//     src: "birthday2.webp",
//     rating: "4.9",
//     reviews: "352",
//     category: "birthday",
// },
// {
//     id: 3,
//     slug: "adorable-birthday-arch",
//     name: "Adorable Birthday Arch Backdrop",
//     mrp: "₹3299",
//     salePrice: "₹2499",
//     salePercentage: "24%",
//     src: "birthday3.webp",
//     rating: "5",
//     reviews: "325",
//     category: "birthday",
// }, {
//     id: 4,
//     slug: "blush-glow-birthday-theme",
//     name: "Blush & Glow Birthday Theme",
//     mrp: "₹2499",
//     salePrice: "₹2199",
//     salePercentage: "12%",
//     src: "birthday4.webp",
//     rating: "4.9",
//     reviews: "287",
//     category: "birthday",
// }
// ]
const BirthdayDecoration = (props: any) => {
    const birthdayProducts = allDecorOptions.filter((item) => item.category === "birthday")
    return (
        <>

            <div className="baby-main-container container ">
                <div className="baby-main-heading flex">
                    <h2>{props.headingName || "Birthday Decoration"}  </h2>
                    <a href="">View All</a>
                </div>
                <div className="card-wrapper flex">
                    {birthdayProducts.map((item) => {
                        return (
                            <BirthdayDecorationCard key={item.slug} {...item} />
                            // slug={item.slug}
                            // decorName={item.name}
                            // mrp={item.mrp}
                            // salePrice={item.salePrice}
                            // salePercantage={item.salePercentage}
                            // src={item.src}
                            // ratingPoint={item.rating}
                            // reviewsCount={item.reviews} 

                        )
                    })}
                    {/* <BirthdayDecorationCard decorName="Simple Balloon Decor for Home" mrp="₹1999" salePrice="₹1499" salePercantage="25%" src="birthday1.webp" ratingPoint="4.9" reviewsCount="487" />
                    <BirthdayDecorationCard decorName="Rose Gold Birthday Home Decor" mrp="₹2299" salePrice="₹1999" salePercantage="13%" src="birthday2.webp" ratingPoint="4.9" reviewsCount="352" />
                    <BirthdayDecorationCard decorName="Adorable Birthday Arch Backdrop" mrp="₹3299" salePrice="₹2499" salePercantage="24%" src="birthday3.webp" ratingPoint="5" reviewsCount="325" />
                    <BirthdayDecorationCard decorName="Blush & Glow Birthday Theme" mrp="₹2499" salePrice="₹2199" salePercantage="12%" src="birthday4.webp" ratingPoint="4.9" reviewsCount="287" /> */}
                </div>
            </div>

        </>
    )
}

export default BirthdayDecoration

export const BirthdayDecorationCard = (props: any) => {

    return (
        <>
            <Link to={`/${props.category}/${props.slug}`}>
                <div className="baby-card flex">
                    <div className="baby-card-main-container flex">
                        <div className="img-wrapper">
                            <img className='card-img' src={`/${props.src}`} alt="" />
                            <div className="ratings flex"><p className='rating-point'>{props.rating}</p><img className='star-img' src="/star.png" alt="" /> <p>({props.reviews})</p></div>
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

export const BirthdayDecorationWrapped = () => {
    return (
        <>
            <Wrapper>
                <BirthdayDecoration />
            </Wrapper>
        </>
    )
}