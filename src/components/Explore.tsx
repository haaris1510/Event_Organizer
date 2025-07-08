import React, { useRef } from 'react'
import "../css/explore.css"

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const eventOptions = [{
    id: 1,
    src: "option1.jpeg",
    alt: "image 1",
    name: "Birthday Decoration"
}, {
    id: 2,
    src: "option2.jpeg",
    alt: "image 2",
    name: "Kids Decoration"
},
{
    id: 3,
    src: "option3.jpeg",
    alt: "image 3",
    name: "Newborn Welcome"
},
{
    id: 4,
    src: "option4.jpeg",
    alt: "image 4",
    name: "Anniversary Decoration"
},
{
    id: 5,
    src: "option5.jpeg",
    alt: "image 5",
    name: "Baby Shower"
},
{
    id: 6,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
},
{
    id: 7,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
},
{
    id: 8,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
},
{
    id: 9,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
},
{
    id: 10,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
},
{
    id: 11,
    src: "option6.jpeg",
    alt: "image 6",
    name: "Corporate Events"
}
]

const Explore = () => {
    const scrollContainerRef = useRef(null as any)
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 200;
        }
    }
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 200;
        }
    }

    return (
        <>
            <div className="explore-wrapper container">
                <button className='prev-btn' onClick={scrollLeft}><FaChevronLeft /></button>

                <div className="main-grid-container marquee-content  " ref={scrollContainerRef}>

                    {eventOptions.map((option) => {
                        return (

                            <div key={option.id}
                                className='options-card flex'>

                                <div className="image-wrapper">
                                    <img src={option.src} alt={option.alt} />
                                </div>
                                <div className="name-details">
                                    <p className='heading-4'>{option.name}</p>
                                </div>

                            </div>


                        )

                    })}
                </div>
                <button className='next-btn' onClick={scrollRight}><FaChevronRight /></button>
            </div>
        </>
    )
}

export default Explore

