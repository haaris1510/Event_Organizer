import { useParams } from 'react-router-dom'
import { BirthdayDecorationWrapped } from './categories/BirthdayDecoration';
import { BabyShowerDecorationWrapped } from './categories/BabyShowerDecoration';
import { AnniversayDecorationWrapped } from './categories/AnniversayDecoration';
import { WelcomeBabyDecorationWrapper } from './categories/WelcomeBabyDecoration';
import { BacheloretteDecorationWrapper } from './categories/BacheloretteDecoration';
import { ShopandOfficeDecorWrapper } from './categories/ShopandOfficeDecor';
import { CarDecorationWrapper } from './categories/CarDecoration';

const OccasionRouter = () => {
    const { slug } = useParams();
    switch (slug) {
        case "birthday":
            return <BirthdayDecorationWrapped />;
        case "baby-shower":
            return <BabyShowerDecorationWrapped />;
        case "anniversary":
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
