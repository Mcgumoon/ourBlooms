import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <div className='min-h-dvh flex flex-col'>
            <NavBar />
            <div className='h-14' aria-hidden='true' />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
