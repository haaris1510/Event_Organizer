import React from 'react'
import Explore from './home/Explore'
import Occasions from './home/Occasions'
import AnniversayDecoration from './categories/AnniversayDecoration'
import WelcomeBabyDecoration from './categories/WelcomeBabyDecoration'
import BabyShowerDecoration from './categories/BabyShowerDecoration'
import BacheloretteDecoration from './categories/BacheloretteDecoration'
import CarDecoration from './categories/CarDecoration'
import ShopandOfficeDecor from './categories/ShopandOfficeDecor'
import ClientSection from './customer feedback/ClientSection'
import BirthdayDecoration from './categories/BirthdayDecoration'

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
