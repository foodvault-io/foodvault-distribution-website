import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter, Epilogue } from 'next/font/google'
import { Button } from './ui/button';
import {
    FooterSocialLogo
} from './FooterSocialLogo';

const inter = Inter({ subsets: ['latin'] })
const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
  })

export function Footer() {
    const [isHovered, setIsHovered] = useState(false);
    const [width, setWidth] = useState<number>(350);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 767 ? true : false);
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 767 ? true : false);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if (isMobile) {
        return (
            <footer className='bg-[#FAFAFA] m-4'>
                <div className='w-full max-w-screen-xl mx-auto p-4 text-center items-center justify-center'>
                    <div className='container py-8'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <Image
                                src='/footer/square_logo.png'
                                alt='Food Vault Square Logo'
                                width={200} height={150}
                                className='rounded-lg'
                            />
                            <div className='flex flex-col mt-4 items-center justify-center'>
                                <Link href='/sign-up'>
                                    <Button
                                        className={`${inter.className} bg-white outline text-red-500
                                    text-[12px] leading-5 opacity-100 w-[200px]
                                    border-none hover:bg-[#F51920FF] hover:text-white
                                    active:bg-[#D1090FFF] active:text-white`}
                                    >
                                        Sign Up For the Waitlist
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="border-2 mx-auto border-[#1E2128FF]" />
                    <div className='flex flex-col items-center justify-center text-center'>
                        <div
                            onMouseOver={() => setIsHovered(true)}
                            onMouseOut={() => setIsHovered(false)}
                            className='pt-2'
                        >
                            {isHovered ? (
                                <Link href='/'>
                                    <Image
                                        src='/red-foodvault-logo.svg'
                                        alt='Food Vault Logo'
                                        width={275} height={70}
                                    />
                                </Link>
                            ) : (
                                <Link href='/'>
                                    <Image
                                        src='/foodvault-header-logo.svg'
                                        alt='Food Vault Logo Hovered'
                                        width={275} height={70}
                                    />
                                </Link>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <span className='block text-sm text-gray-500 sm:text-center'>
                                © 2023 <Link href='/' className='underline'>Food Vault</Link>
                                — All Rights Reserved. Food Vault Corporation
                                &bull;<Link href='/' className='hover:underline'>Privacy</Link>
                                &bull;<Link href='/' className='hover:underline'>Terms</Link>
                                &bull;<Link href='/' className='hover:underline'>System Usage Policy</Link>
                            </span>
                        </div>
                        <div className='flex mt-4 space-x-6 justify-end sm:justify-center sm:mt-0'>
                            <FooterSocialLogo
                                source='/footer/phosphor-facebook.svg'
                                alt='facebook logo1'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Linkedin.svg'
                                alt='Linkedin logo'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Twitter.svg'
                                alt='Twitter logo'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Instagram.svg'
                                alt='Instagram logo'
                            />
                        </div>
                    </div>
                </div>
            </footer>
        )
    } else {
        return (
            <footer className='bg-[#FAFAFA] m-4'>
                <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
                    <div className='container px-6 py-8 mx-auto'>
                        <div className='flex justify-center items-center text-center'>
                            <Image
                                src='/footer/square_logo.png'
                                alt='Food Vault Square Logo'
                                width={207} height={186}
                                className='rounded-lg'
                            />
                            <div className='flex flex-col mt-4 items-center justify-center sm:mt-0 sm:ml-4'>
                                <Link href='/sign-up'>
                                    <Button
                                        className={`${inter.className} bg-white outline text-red-500
                                    text-[12px] leading-5 opacity-100 
                                    border-none hover:bg-[#F51920FF] hover:text-white
                                    active:bg-[#D1090FFF] active:text-white`}
                                    >
                                        Sign Up For the Waitlist
                                    </Button>
                                </Link>
                                {/* <EmailSubmission /> */}
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-2 sm:mx-auto border-[#1E2128FF] lg:my-8" />
                    <div className='sm:flex sm:items-center sm:justify-between'>
                        <div
                            onMouseOver={() => setIsHovered(true)}
                            onMouseOut={() => setIsHovered(false)}
                        >
                            {isHovered ? (
                                <Link href='/'>
                                    <Image
                                        src='/red-foodvault-logo.svg'
                                        alt='Food Vault Logo'
                                        width={275} height={70}
                                    />
                                </Link>
                            ) : (
                                <Link href='/'>
                                    <Image
                                        src='/foodvault-header-logo.svg'
                                        alt='Food Vault Logo Hovered'
                                        width={275} height={70}
                                    />
                                </Link>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <span className='block text-sm text-gray-500 sm:text-center'>
                                © 2023 <Link href='/' className='underline'>Food Vault</Link>
                                — All Rights Reserved. Food Vault Corporation
                                &bull;<Link href='/' className='hover:underline'>Privacy</Link>
                                &bull;<Link href='/' className='hover:underline'>Terms</Link>
                                &bull;<Link href='/' className='hover:underline'>System Usage Policy</Link>
                            </span>
                        </div>
                        <div className='flex mt-4 space-x-6 justify-end sm:justify-center sm:mt-0'>
                            <FooterSocialLogo
                                source='/footer/phosphor-facebook.svg'
                                alt='facebook logo1'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Linkedin.svg'
                                alt='Linkedin logo'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Twitter.svg'
                                alt='Twitter logo'
                            />
                            <FooterSocialLogo
                                source='/footer/phosphor-Instagram.svg'
                                alt='Instagram logo'
                            />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    
}