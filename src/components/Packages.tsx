import React from 'react'
import "../css/navbar.scss"

const Packages = () => {
    return (
        <>
        <div className="home-heading container">
                Explore
            </div>
            <div className='home-heading-para'>
                <h1>Wide Range of Packages</h1></div>
            <div className="package-box container">
                <div className="package-box1">
                    <img src="Silver-package.jpg" alt="" />
                    <div className="package-name">Silver Package</div>
                </div>
                <div className="package-box1">
                    <img src="Silver-package.jpg" alt="" />
                    <div className="package-name">Silver Plus Package</div>
                </div>
                <div className="package-box1">
                    <img src="gold-packag.png" alt="" />
                    <div className="package-title">Gold Package</div>
                </div>
                <div className="package-box1">
                    <img src="gold-packag.png" alt="" />
                    <div className="package-title">Gold Plus Package</div>
                </div>
                <div className="package-box1">
                    <img src="diamond-packe.jpg" alt="" />
                    <div className="package-name">Diamond Package</div>
                </div>
                <div className="package-box1">
                    <img src="diamond-packe.jpg" alt="" />
                    <div className="package-name">Diamond Plus Package</div>
                </div>
                <div className="package-box1">
                    <img src="platinum-package.jpg" alt="" />
                    <div className="package-name">Platinum Package</div>
                </div>
                <div className="package-box1">
                    <img src="platinum-package.jpg" alt="" />
                    <div className="packagename">Platinum Plus Package</div>
                </div>
            </div>
        </>
    )
}

export default Packages
