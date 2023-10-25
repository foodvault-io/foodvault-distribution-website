import React from 'react'
import { Epilogue, Inter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/router'

const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const MainPageTop = () => {
    const router = useRouter();

    return (
      <div className='flex flex-col h-[400px] sm:h-[690px] mt-14 sm:mt-16 md:mt-20'>
          <div className='absolute w-full h-[400px] sm:h-[690px] overflow-hidden z-1'>
              <Image
                  alt="Fields"
                  src="/home-page/field-truck.jpg"
                  placeholder="blur"
                  blurDataURL="/home-page/field-truck.jpg"
                  quality={100}
                  fill
                  style={{
                      objectFit: 'cover',
                  }}
              />
          </div>
          <div className='pt-28 sm:pt-52 justify-center items-center text-center flex-col'>
              <text className={`m-0 text-md sm:text-xl md:text-2xl text-white ${inter.className}`}>
                  Margins in the food business are tough.
              </text>
              <p className={`m-0 text-5xl sm:text-6xl md:text-7xl font-bold text-white ${epilogue.className} pt-4`}>
                  Food Vault
                  <br />
                  Reduces Costs
              </p>
          </div>
          <div className='justify-center items-center text-center flex pt-5'>
              <button
                  className={`w-[150px] sm:w-[180px] md:w-[215px] h-[48px] md:h-[52px] 
                  ${inter.className} text-lg sm:text-xl bg-white text-[#F51920FF] 
                  rounded-[26px] hover:bg-neutral-300 hover:text-[#F51920FF]
                  hover:shadow-md active:bg-neutral-400 active:text-[#F51920FF]`}
                  onClick={() => router.push('#AboutUs')}
              >
                  Learn More
              </button>
          </div>
      </div>
    )
}
