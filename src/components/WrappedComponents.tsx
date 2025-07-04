import React from 'react'
import Explore from './Explore'
import Occasions from './Occasions'
import AnniversayDecoration from './AnniversayDecoration'
import WelcomeBabyDecoration from './WelcomeBabyDecoration'
import BabyShowerDecoration from './BabyShowerDecoration'
import BacheloretteDecoration from './BacheloretteDecoration'
import CarDecoration from './CarDecoration'
import ShopandOfficeDecor from './ShopandOfficeDecor'
import ClientSection from './ClientSection'
import BirthdayDecoration from './BirthdayDecoration'

const WrappedComponents = () => {
    return (
        <div>
            <Explore />
            <Occasions />
            <BirthdayDecoration />
            <AnniversayDecoration />
            <WelcomeBabyDecoration />
            <BabyShowerDecoration />
            <BacheloretteDecoration />
            <CarDecoration />
            <ShopandOfficeDecor />
            <ClientSection />
        </div>
    )
}

export default WrappedComponents
