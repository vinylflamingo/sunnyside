import React from 'react'
import Navigation from '../Controls/Navigation'

function MainLayout({ children }) {
    return (
        <main className="flex flex-col w-full h-full justify-start items-center" >
            <Navigation />
            <>{children}</>
        </main>
    )
}

export default MainLayout