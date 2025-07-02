
import './App.css'
import AnniversayDecoration from './components/AnniversayDecoration'
import BabyShowerDecoration from './components/BabyShowerDecoration'
import BacheloretteDecoration from './components/BacheloretteDecoration'
import BirthdayDecoration from './components/BirthdayDecoration'
import CarDecoration from './components/CarDecoration'
import ClientSection from './components/ClientSection'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Occasions from './components/Occasions'
import Packages from './components/Packages'
import ProductPage from './components/ProductPage'
import ShopandOfficeDecor from './components/ShopandOfficeDecor'
import WelcomeBabyDecoration from './components/WelcomeBabyDecoration'

function App() {

  return (
    <>
      <Navbar />
      <Explore />
      <Occasions />
      <BirthdayDecoration />
      <WelcomeBabyDecoration />
      <BabyShowerDecoration />
      <AnniversayDecoration />
      <BacheloretteDecoration />
      <CarDecoration />
      <ShopandOfficeDecor />
      <Packages />
      <ClientSection />
      <Footer/>
      <ProductPage/>
    </>
  )
}

export default App
