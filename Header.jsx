// Importerer NavLink fra react-router-dom og useState fra React
    import { NavLink } from 'react-router-dom';
    import React, { useState } from 'react';

// Funktionen Header er en React komponent
    export default function Header() {

    // Deklarerer en state variabel 'isOpen' og en funktion 'setIsOpen' til at ændre den
        const [isOpen, setIsOpen] = useState(false);

    // Funktionen toggleMenu ændrer værdien af 'isOpen' til det modsatte af dens nuværende værdi
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

    // Returnerer header-elementet med indholdet
    return (
        <header className='fixed top-5 left-5 w-full z-50'>
            <div className="flex justify-between items-center p-4">
                {/* Dette div vil kun være synligt på skærme større end mobil */}
                <div className="hidden sm:flex space-x-9">

                    {/* NavLink til hjem */}
                    <NavLink
                        to='/home'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body cursor-pointer text-xl hover:text-pink' : 'text-white cursor-pointer font-body text-xl hover:text-pink'}
                    > Baileys x Eurovision
                    </NavLink>

                    {/* NavLink til Om Baileys */}
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body cursor-pointer text-xl hover:text-pink' : 'text-white cursor-pointer font-body text-xl hover:text-pink'}
                    > Om Baileys
                    </NavLink>

                    {/* NavLink til opskrifter */}
                    <NavLink
                        to='/recipe'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body cursor-pointer text-xl hover:text-pink' : 'text-white cursor-pointer font-body text-xl hover:text-pink'}
                    > Eurovision opskrifter
                    </NavLink>
                </div>

                {/* Burger-menu knap, som kun er synlig på mobil */}
                <div className="sm:hidden flex justify-end w-full mr-5">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {/* SVG-ikon til burgermenu */}
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Viser det mobile menu hvis 'isOpen' er sandt */}
            {isOpen && (
                <div className="sm:hidden flex flex-col items-end p-4 space-y-4 bg-black bg-opacity-20 w-56  rounded-2xl absolute top-16 right-5 z-50">
                    {/* NavLink til hjem */}
                    <NavLink
                        to='/home'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body text-xl hover:text-pink' : 'text-white font-body text-xl hover:text-pink'}
                        onClick={toggleMenu}
                    > Eurovision x Baileys
                    </NavLink>

                    {/* NavLink til Om Baileys */}
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body text-xl hover:text-pink' : 'text-white font-body text-xl hover:text-pink'}
                        onClick={toggleMenu}
                    > Om Baileys
                    </NavLink>

                    {/* NavLink til opskrifter */}
                    <NavLink
                        to='/recipe'
                        className={({ isActive }) =>
                            isActive ? 'text-pink font-body text-xl hover:text-pink' : 'text-white font-body text-xl hover:text-pink'}
                        onClick={toggleMenu}
                    > Eurovision opskrifter
                    </NavLink>
                </div>
            )}
        </header>
    );
}
