import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <div className='flex items-center justify-between mr-32'>
                <Link href='/' className='text-blue-300 font-bold'>
                   Home
                </Link>
            </div>

            <div className='flex items-center justify-between'>
                <Link href='/about' className='text-blue-400 font-bold'>
                    What is Food Vault?
                </Link>
            </div>

            <div className='flex items-center justify-between'>
                <Link href='/contact' className='text-blue-500 font-bold'>
                    Help Center
                </Link>
            </div>

            <div className='flex items-center justify-between'>
                <Link href='/contact' className='text-blue-600 font-bold'>
                    Contact Us
                </Link>
            </div>
        </header>
    )
}

