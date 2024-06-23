'use client';

import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

function Navbar() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) {
        return null;
    }
    return (
        <div className=' fixed w-full bg-white z-10 shadow-sm'>
            <div className=' py-4 border-b-[1px]'>
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
