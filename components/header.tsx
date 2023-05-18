import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export function Header() {
    return (
        <header 
            className="flex w-full absolute top-0 left-0 h-[64px] bg-[#FAFAFAFF] rounded-[4px]"
        >
            <div className='flex absolute top-[14px] left-16'>
                <Link href='/'>
                    <Image 
                        src='/foodvault-header-logo.png'
                        alt='Food Vault Logo' 
                        width={168} height={36}
                    />
                </Link>
            </div>
            <div
                className={`flex items-center absolute 
                top-3 left-[1064px] w-96 h-10 text-sm 
                opacity-100 leading-6 ${inter.className}`}
            >
                <div 
                    className='flex items-center 
                    justify-center text-neutral-600 bg-transparent 
                    rounded-md cursor-pointer whitespace-nowrap
                    py-2 px-6'
                >
                    <Link href='/about'>
                        What is Food Vault?
                    </Link>
                </div>

                <div 
                    className='flex items-center 
                    justify-center text-neutral-600 bg-transparent 
                    rounded-md cursor-pointer whitespace-nowrap
                    py-2 px-6'
                >
                    <Link href='/sign-up'>
                        Sign Up 
                    </Link>
                </div>
                <div 
                    className='flex items-center 
                    justify-center text-neutral-600 bg-transparent 
                    rounded-md cursor-pointer whitespace-nowrap
                    py-2 px-6'
                >
                    <Link href='/faq'>
                        FAQ
                    </Link>
                </div>
            </div>
        </header>
    )
}

