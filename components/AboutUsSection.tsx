import {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import { Inter, Epilogue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
  })


export function AboutUsSection() {
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
        };
    }, []);

    if (isMobile) {
        return (
            <div id='AboutUs' className='flex flex-row justify-between items-center w-full h-[170px] mt-4'>
                <div className='flex flex-col w-2/3 pl-2'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className={`${epilogue.className} text-[22px] mt-1 leading-[34px] text-[#f51920] font-bold`}>
                              What is Food Vault?
                            </h1>
                        </div> 
                        <text className={`m-0 text-[11px] leading-[18px] font-semibold ${inter.className}`}>
                            Food Distribution Re-Imagined:
                        </text>
                    </div>
                    <text className={`m-0 text-left text-[11px] leading-[18px] ${inter.className} text-neutral-700 mt-2 pr-3`}>
                      Food Vault works with local distributors to 
                      offer the most optimal price point 
                      to local restaurants and kitchens looking to fulfil their 
                      inventory needs.
                    </text>
                </div>
                <div className='flex flex-col box-border h-[162px] w-1/3 bg-white mr-2 rounded-[20px] shadow-2xl items-center'>
                    <div className='py-2'>
                        <text className={`${epilogue.className} text-[14px] leading-[22px] font-extrabold text-[#f51920]`}>
                            Share Info 
                        </text>
                    </div>
                    <div className='flex flex-col justify-between w-full items-center'>
                        <div className='flex w-[90%] bg-[#FEF0F1] rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                            <Image
                                src='/home-page/what-is-foodvault/signal.svg'
                                alt='Signal Icon'
                                width={16} height={16}
                            />
                            <text className={`${inter.className} text-[12px] text-[#F51920] pl-1`}>
                                Share Data
                            </text>
                        </div>
                        <div className='flex w-[90%] bg-[#BDCDC4] my-3 rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                            <Image
                                src='/home-page/what-is-foodvault/bids.svg'
                                alt='Signal Icon'
                                width={16} height={16}
                            />
                            <text className={`${inter.className} text-[12px] text-[#536e5f] pl-1`}>
                                Get Bids
                            </text>
                        </div>
                        <div className='flex w-[90%] bg-[#FEF8F1] rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                            <Image
                                src='/home-page/what-is-foodvault/payment.svg'
                                alt='Signal Icon'
                                width={16} height={16}
                            />
                            <text className={`${inter.className} text-[10px] text-[#EF9834] pl-1`}>
                                Cheap Inventory
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='AboutUs' className='flex flex-row justify-between w-full h-[200px] mt-4'>
                <div className='flex flex-col w-3/5 pl-2 items-center justify-center'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className={`${epilogue.className} text-[26px] sm:text-[36px] md:text-[42px] lg:text-[52px] leading-[48px] sm:leading-[62px] md:leading-[74px] mt-1  text-[#f51920] font-bold`}>
                              What is Food Vault?
                            </h1>
                        </div> 
                        <text className={`m-0 text-[14px] leading-[18px] font-semibold ${inter.className}`}>
                            Food Distribution Re-Imagined:
                        </text>
                    </div>
                    <div className='flex flex-col justify-center mt-2 max-w-[255px] sm:max-w-[355px]'>
                        <p className={`text-left text-[11px] leading-[18px] ${inter.className} text-neutral-700`}>
                            Food Vault works with local distributors
                            <br /> 
                            to offer the most optimal price point to
                            <br />
                            local restaurants and kitchens looking
                            <br />
                            to fulfil their inventory needs.
                        </p>
                    </div>
                </div>
                <div className='flex w-2/5'>
                    <div className='flex flex-col box-border h-[162px] w-[150px] md:w-[190px] lg:w-[235px] bg-white mr-2 rounded-[20px] shadow-2xl items-center'>
                        <div className='py-2'>
                            <text className={`${epilogue.className} text-[14px] leading-[22px] font-extrabold text-[#f51920]`}>
                                Share Info 
                            </text>
                        </div>
                        <div className='flex flex-col justify-between w-full items-center'>
                            <div className='flex w-[90%] bg-[#FEF0F1] rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                                <Image
                                    src='/home-page/what-is-foodvault/signal.svg'
                                    alt='Signal Icon'
                                    width={16} height={16}
                                />
                                <text className={`${inter.className} text-[12px] text-[#F51920] pl-1`}>
                                    Share Data
                                </text>
                            </div>
                            <div className='flex w-[90%] bg-[#BDCDC4] my-3 rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                                <Image
                                    src='/home-page/what-is-foodvault/bids.svg'
                                    alt='Signal Icon'
                                    width={16} height={16}
                                />
                                <text className={`${inter.className} text-[12px] text-[#536e5f] pl-1`}>
                                    Get Bids
                                </text>
                            </div>
                            <div className='flex w-[90%] bg-[#FEF8F1] rounded-[8px] h-[28px] items-center justify-left opacity-100 pl-1'>
                                <Image
                                    src='/home-page/what-is-foodvault/payment.svg'
                                    alt='Signal Icon'
                                    width={16} height={16}
                                />
                                <text className={`${inter.className} text-[10px] text-[#EF9834] pl-1`}>
                                    Cheap Inventory
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}