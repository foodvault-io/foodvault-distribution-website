import Image from 'next/image'
import { useRouter } from 'next/router'
import { Epilogue, Inter } from 'next/font/google'
import { Header, Footer, InformationCards } from '@/components'
import { Button, buttonVariants } from '@/components/ui/button'
import Head from 'next/head'
import Link from 'next/link'

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>Food Vault</title>
      </Head>
      <Header />
      <div
            className='flex min-h-screen flex-col min-w-full'
      >
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
                onClick={() => router.push('/about')}
              >
                Learn More
            </button>
          </div>
        </div> 
        {/* <div className='flex flex-col md:flex-row justify-between w-full h-[400px]'>
          <div className='basis-1/2 items-center justify-center'>
              <text className={`m-0 text-[14px] leading-[22px] pb-4 ${inter.className}`}>
                Food Distribution Re-Imagined 
              </text>
              <h1 className={`${epilogue.className} text-[52px] leading-10 text-neutral-700 font-bold`}>
                About us
              </h1>
              <Image
                alt="arc-1"
                src="/home-page/arc-1.jpeg"
                width={237}
                height={24}
                className='rounded-none'
              />
              <p className={`m-0 text-center text-sm ${inter.className} text-neutral-700 w-[480px] pt-3`}>
              We are taking the wheel of distribution and 
              <br/>
              reinventing it for the modern world. Where 
              <br/>
              seamless ordering is prioritized, costs are
              <br/>
              minimized, and profits are maximized. And all you 
              <br/>
              have to do is share your order details.
              </p>
          </div>
          <div className= 'basis-1/2 items-center justify-center'>
            <div className='relative bottom-0 w-[360px] h-[375px] bg-green-200 rounded-t-full'>
              <div className='absolute bottom-0 right-3'>
                  <Image
                    alt="jam-jar"
                    src="/home-page/jar-of-jam-1.jpg"
                    width={280}
                    height={330}
                    className=' rounded-[197px]'
                  />
              </div>
            </div>
          </div>
        </div> */}
        {/* TODO: Include this text in the conditional InformationCard.tsx function */}
        <InformationCards />
      </div>
      <Footer />
    </main>
  )
}
