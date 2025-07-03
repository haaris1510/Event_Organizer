import React from 'react'
import Wrapper from '../Wrapper'
import Occasions from './Occasions'
import Explore from './Explore'
import BirthdayDecoration from './BirthdayDecoration'
import AnniversayDecoration from './AnniversayDecoration'
import WelcomeBabyDecoration from './WelcomeBabyDecoration'
import BabyShowerDecoration from './BabyShowerDecoration'
import BacheloretteDecoration from './BacheloretteDecoration'
import CarDecoration from './CarDecoration'
import ShopandOfficeDecor from './ShopandOfficeDecor'
import ClientSection from './ClientSection'

const Home = () => {
  return (
    <>
    <Wrapper>
    <Explore/>
        <Occasions/>
        <BirthdayDecoration/>
        <AnniversayDecoration/>
        <WelcomeBabyDecoration/>
        <BabyShowerDecoration/>
        <BacheloretteDecoration/>
        <CarDecoration/>
        <ShopandOfficeDecor/>
        <ClientSection/>
        
    </Wrapper>
    </>
  )
}

export default Home
