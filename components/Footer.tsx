import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
    return (
        <div className='bg-blue-300'>
            <text className='bg-[#F51920FF]'>
                Footer
            </text>
        </div>
    )
}