import React, { useState } from 'react';
import { EmailSubmission } from './EmailSubmission';
import Link from 'next/link';
import Image from 'next/image';
import { Inter, Epilogue } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
  })

export function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className='bg-white m-4'>
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
                            <text className={`${epilogue.className} font-semibold text-[20px] leading-8 text-[#F51920FF]`}>
                                Subscribe to our newsletter
                            </text>
                            <text className={`${inter.className} text-[12px] leading-5 text-[#424856FF]`}>
                                For product announcements and exclusive insights
                            </text>
                            <EmailSubmission />
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
                        <a href='#' className='text-gray-500 hover:text-gray-900'>
                            <Image
                                src='/footer/phosphor-facebook.svg'
                                alt='facebook logo'
                                width={24} height={24}
                            />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900'>
                            <Image
                                src='/footer/phosphor-Linkedin.svg'
                                alt='Linkedin logo'
                                width={24} height={24}
                            />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900'>
                            <Image
                                src='/footer/phosphor-Twitter.svg'
                                alt='Twitter logo'
                                width={24} height={24}
                            />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-gray-900'>
                            <Image
                                src='/footer/phosphor-Instagram.svg'
                                alt='Instagram logo'
                                width={24} height={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}