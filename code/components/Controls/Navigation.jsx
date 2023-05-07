import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 400;

    return (
        <nav className={`z-20 fixed top-0 left-0 w-full flex flex-col items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} ${isScrolled ? 'h-16' : 'h-28'}`}>
            <div className="container mx-auto px-6 py-3 max-w-[1352px] flex items-center h-full">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <img src={`/logo${isScrolled ? '-black' : ''}.svg`} alt="Logo" className="h-8 w-auto z-50 relative" />
                    </div>
                    <div className={`text-[18px] hidden md:initial md:flex items-center transition-all duration-300 ${isScrolled ? 'text-[#24303E]' : 'text-white'}`}>
                        <a href="#" className="mx-4 font-barlow">About</a>
                        <a href="#" className="mx-4 font-barlow">Services</a>
                        <a href="#" className="mx-4 font-barlow">Projects</a>
                        <a href="#" className={`mx-4 font-fraunces font-700 text-[15px] ${isScrolled ? 'bg-[#24303E] text-white hover:text-[#24303E] py-3' : 'bg-white bg-opacity-25 py-4'} hover:bg-opacity-10 shadow rounded-full px-8 border-spacing-5`}>CONTACT</a>
                    </div>
                    <div className="md:hidden flex items-center justify-center">
                        <button onClick={toggleMenu}>
                            <img src={isOpen ? "/icon-x.svg" : isScrolled ? "/icon-hamburger-black.svg" : "/icon-hamburger.svg"} alt="Menu" className={isOpen ? "h-16 w-auto z-50 relative" : "h-8 w-auto"} />
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-[#000] bg-opacity-50 z-10 w-full h-full transition duration-150 ease-in-out" onClick={toggleMenu}>
                        <div className="bg-white w-[80%] mx-auto flex flex-col items-center justify-center h-[50px] mt-[100px] clip-traingle-shallow"> </div>
                        <div className="bg-white w-[80%] mx-auto p-8 space-y-4 flex flex-col items-center justify-center py-16">
                            <a href="#" className="block font-barlow text-[#808397] text-[20px]">About</a>
                            <a href="#" className="block font-barlow text-[#808397] text-[20px]">Services</a>
                            <a href="#" className="block font-barlow text-[#808397] text-[20px]">Projects</a>
                            <a href="#" className="block font-fraunces text-[#24303E] bg-yellow hover:bg-opacity-50 rounded-full shadow px-8 py-4">CONTACT</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;