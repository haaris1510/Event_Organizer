import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'

import OccasionRouter from '../components/OccasionRouter'
import ScrollToTop from '../components/scroll to top/ScrollToTop'
import ProductPage from '../components/product page/ProductPage'
import Signup from '../components/signup/Signup'
import Login from '../components/login/Login'
import ContactPage from '../components/contact page/ContactPage'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/:slug" element={<OccasionRouter />} />
                        <Route path='/:category/:slug/' element={<ProductPage />} />
                        <Route path='/sign-up' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/contact-us' element={<ContactPage />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
