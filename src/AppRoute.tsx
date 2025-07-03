import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BirthdayDecoration from './components/BirthdayDecoration'
import OccasionRouter from './components/OccasionRouter'
import ScrollToTop from './components/ScrollToTop'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/:slug" element={<OccasionRouter />} />

                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
