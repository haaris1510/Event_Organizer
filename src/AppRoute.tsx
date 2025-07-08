import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import OccasionRouter from './components/OccasionRouter'
import ScrollToTop from './components/ScrollToTop'
import ProductPage from './components/ProductPage'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/:slug" element={<OccasionRouter />} />
                        <Route path='/:category/:slug/' element={<ProductPage />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
