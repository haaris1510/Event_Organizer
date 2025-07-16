import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'

import OccasionRouter from '../components/OccasionRouter'
import ScrollToTop from '../components/scroll to top/ScrollToTop'
import ProductPage from '../pages/product page/ProductPage'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import ContactPage from '../pages/contact page/ContactPage'

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
