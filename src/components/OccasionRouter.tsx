import React from 'react'
import { useParams } from 'react-router-dom'
import { BirthdayDecorationWrapped } from './BirthdayDecoration';
import { BabyShowerDecorationWrapped } from './BabyShowerDecoration';
import { AnniversayDecorationWrapped } from './AnniversayDecoration';
import { WelcomeBabyDecorationWrapper } from './WelcomeBabyDecoration';
import { BacheloretteDecorationWrapper } from './BacheloretteDecoration';
import { ShopandOfficeDecorWrapper } from './ShopandOfficeDecor';
import { CarDecorationWrapper } from './CarDecoration';

const OccasionRouter = () => {
    const { slug } = useParams();
    switch (slug) {
        case "birthday":
            return <BirthdayDecorationWrapped />;
        case "baby-shower":
            return <BabyShowerDecorationWrapped />;
        case "wedding-anniversary":
            return <AnniversayDecorationWrapped />;
        case "baby-welcome":
            return <WelcomeBabyDecorationWrapper />
        case "bachelorette":
            return <BacheloretteDecorationWrapper />;
        case "shop-office-decor":
            return <ShopandOfficeDecorWrapper />
        case "car-decoration":
            return <CarDecorationWrapper />
    }

}

export default OccasionRouter
