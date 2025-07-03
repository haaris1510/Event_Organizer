import React from 'react'
import { useParams } from 'react-router-dom'
import BirthdayDecoration from './BirthdayDecoration';
import BabyShowerDecoration from './BabyShowerDecoration';
import AnniversayDecoration from './AnniversayDecoration';
import WelcomeBabyDecoration from './WelcomeBabyDecoration';
import BacheloretteDecoration from './BacheloretteDecoration';
import ShopandOfficeDecor from './ShopandOfficeDecor';
import CarDecoration from './CarDecoration';

const OccasionRouter = () => {
    const { slug } = useParams();
    switch (slug) {
        case "birthday":
            return <BirthdayDecoration />;
        case "baby-shower":
            return <BabyShowerDecoration />;
        case "wedding-anniversary":
            return <AnniversayDecoration />;
        case "baby-welcome":
            return <WelcomeBabyDecoration />
        case "bachelorette":
            return <BacheloretteDecoration />;
        case "shop-office-decor":
            return <ShopandOfficeDecor />
        case "car-decoration":
            return <CarDecoration />
    }
   
}

export default OccasionRouter
