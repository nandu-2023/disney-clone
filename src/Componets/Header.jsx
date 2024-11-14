import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    
    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'WATCH LIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv }
    ];

    const toggleMenu = () => setToggle(prev => !prev);

    const handleKeyToggle = (e) => {
        if (e.key === 'Enter' || e.key === ' ') toggleMenu();
    };

    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex gap-8 items-center">
                <img src={logo} alt="Logo" className="w-[80px] md:w-[115px] object-cover" />
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {menu.map(item => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                
                {/* Mobile Menu */}
                <div className="flex md:hidden gap-5" role="menu">
                    {menu.slice(0, 3).map(item => (
                        <HeaderItem key={item.name} name="" Icon={item.icon} />
                    ))}

                    {/* Toggle Button */}
                    <div
                        className="md:hidden"
                        onClick={toggleMenu}
                        onKeyDown={handleKeyToggle}
                        role="button"
                        aria-haspopup="menu"
                        aria-expanded={toggle}
                        tabIndex={0}
                    >
                        <HeaderItem name="" Icon={HiDotsVertical} />
                        
                        {/* Dropdown Menu */}
                        {toggle && (
                            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4" role="menu">
                                {menu.slice(3).map(item => (
                                    <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* User Avatar */}
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="User Avatar"
                className="w-[40px] rounded-full"
                role="img"
                aria-label="User Avatar"
            />
        </div>
    );
}

export default Header;
