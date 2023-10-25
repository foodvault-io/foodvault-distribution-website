import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Header() {
    const [navBar, setNavBar] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <nav className="w-full bg-[#FAFAFA] fixed top-0 z-10 rounded-sm">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            <div
                                onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}
                            >
                                {isHovered ? (
                                    <Link href='/'>
                                        <Image 
                                            src='/red-foodvault-logo.svg'
                                            alt='Food Vault Logo' 
                                            width={180} height={46}
                                        />
                                    </Link>
                                ) : (
                                    <Link href='/'>
                                        <Image 
                                            src='/foodvault-header-logo.svg'
                                            alt='Food Vault Logo Hovered' 
                                            width={180} height={46}
                                        />
                                    </Link>
                                )}
                            </div>
                            {/* hamburger button for mobile */}
                            <div className="lg:hidden">
                                <button
                                    className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                                    onClick={() => setNavBar(!navBar)}
                                >
                                    { navBar ? (
                                        <Image src='/exit-logo.svg' alt='exit logo' width={30} height={30} 
                                            className='hover:filter hover:brightness-125'
                                        />
                                    ): (
                                        <Image
                                            src='/hamburger.svg'
                                            width={30} height={30}
                                            alt="logo"
                                            className='focus:border-none active:border-none hover:filter hover:brightness-200'
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                                navBar ? 'p-12 lg:p-0 block' : 'hidden'
                            }`}
                        >
                            <ul className='h-screen lg:h-auto items-center justify-center mt-4 lg:flex'>
                                <li className={`pb-6 text-sm text-neutral py-2 lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-[#F51920FF] lg:hover:text-[#F51920FF] lg:hover:bg-transparent ${inter.className}`}>
                                    <Link href='#AboutUs' onClick={() => setNavBar(!navBar)}>
                                        What is Food Vault?
                                    </Link>
                                </li>
                                <li className={`pb-6 text-sm text-neutral py-2 lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-[#F51920FF] lg:hover:text-[#F51920FF] lg:hover:bg-transparent ${inter.className}`}>
                                    <Link href='#BenefitsSection' onClick={() => setNavBar(!navBar)}>
                                        Benefits to Restaurants
                                    </Link>
                                </li>
                                <li className={`pb-6 text-sm text-neutral py-2 lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-[#F51920FF] lg:hover:text-[#F51920FF] lg:hover:bg-transparent ${inter.className}`}>
                                    <Link href='#BenefitsDistributor' onClick={() => setNavBar(!navBar)}>
                                        Benefits to Distributors
                                    </Link>
                                </li>
                                <li className={`pb-6 text-sm text-neutral py-2 lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-[#F51920FF] lg:hover:text-[#F51920FF] lg:hover:bg-transparent ${inter.className}`}>
                                    <Link href='#FAQ' onClick={() => setNavBar(!navBar)}>
                                        FAQ
                                    </Link>
                                </li>
                                <li className={`pb-6 text-sm text-neutral py-2 lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-[#F51920FF] lg:hover:text-[#F51920FF] lg:hover:bg-transparent ${inter.className}`}>
                                    <Link href="/sign-up" onClick={() => setNavBar(!navBar)}>
                                      Sign Up! 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )  
}
