import React from "react";
import "../css/occasions.css";

const occasionOptions = [
  {
    id: 1,
    src: "occasion1.avif",
    alt: "image 1",
    name: "Birthday",
  },
  {
    id: 2,
    src: "occasion2.avif",
    alt: "image 2",
    name: "Baby Shower",
  },
  {
    id: 3,
    src: "occasion3.avif",
    alt: "image 3",
    name: "Candlelight Dinner",
  },
  {
    id: 4,
    src: "occasion4.avif",
    alt: "image 4",
    name: "Baby Welcome",
  },
  {
    id: 5,
    src: "occasion5.avif",
    alt: "image 5",
    name: "House Warming",
  },
  {
    id: 6,
    src: "occasion6.avif",
    alt: "image 6",
    name: "Haldi/Mehendi",
  },
  {
    id: 7,
    src: "occasion7.avif",
    alt: "image 7",
    name: "Wedding Anniversary",
  },
  {
    id: 8,
    src: "occasion8.avif",
    alt: "image 8",
    name: "Party Decorations",
  },
];
const Occasions = () => {
  return (
    <>
      <div className="home-heading container">Explore</div>
      <div className="home-heading-para">
        <h1>Wide Range of Options</h1>
      </div>
      <div className="oc-main-grid-container container">
        {occasionOptions.map((occasion) => {
          return (
            <div key={occasion.id} className="oc-options-card flex">
              <div className="oc-image-wrapper">
                <img src={occasion.src} alt={occasion.alt} />
              </div>
              <div className="name-details">
                <p className="occasion-name">{occasion.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex-box">                <div className="dropdown">
                <button className='btn pulse'>Hover Me</button>
                <div className="dropdown-content">
                    <a href="">Item 1</a>
                    <a href="">Item 2</a>
                    <a href="">Item 3</a>
                </div>
            </div>

                <div className="dropdown">
                    <button className='btn pulse'>Hover Me</button>
                    <div className="dropdown-content">
                        <a href="">Item 4</a>
                        <a href="">Item 5</a>
                        <a href="">Item 6</a>
                        <a href="">Item 7</a>
                        <a href="">Item 8</a>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Occasions;
