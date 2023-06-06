import Image from 'next/image'
import { useRouter } from 'next/router'
import { Epilogue, Inter } from 'next/font/google'
import { Header, Footer } from '@/components'
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
            className='flex min-h-screen flex-col'
      >
        <div className='flex flex-col h-[690px] md:mt-20 mt-16'>
          <div className='absolute w-full h-[690px] overflow-hidden z-1'>
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
          <div className='pt-52 justify-center items-center text-center flex-col'>
            <text className={`m-0 text-xl text-white ${inter.className}`}>
              Margins in the food business are tough.
            </text>
            <p className={`m-0 text-5xl font-bold text-white ${epilogue.className} md:text-8xl pt-4`}>
              Food Vault 
              <br />
              Reduces Costs 
            </p>
          </div>
          <div className='justify-center items-center text-center flex pt-5'>
            <button 
                className={`w-[180px] h-[48px] md:w-[215px] md:h-[52px] 
                  ${inter.className} text-lg bg-white text-[#F51920FF] 
                  rounded-[26px] hover:bg-neutral-300 hover:text-[#F51920FF]
                  hover:shadow-md active:bg-neutral-400 active:text-[#F51920FF]`}
                onClick={() => router.push('/about')}
              >
                Learn More
            </button>
          </div>
        </div> 
        <div className='flex flex-col md:flex-row justify-between w-full h-[400px]'>
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
        </div>
        <div className='flex flex-col mt-10 w-full justify-between items-center h-[700px]'>
          <div className='w-full flex justify-center h-[100px]'>
            <h1 className={`${epilogue.className} text-[52px] leading-10 text-neutral-700 font-bold`}>
              What Does Food Vault Do?
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 h-[600px] mx-24">
            <div className='flex bg-[#CECECEFF] h-[300px] rounded-3xl'>
              <div className='flex flex-col pt-5 pl-6 '>
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Step 1:
                </text>
                <br />
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Inventory Curation
                </text>
                <p className='text-[17px]'>
                  Utilize our easy forecasting tools to input your existing
                  inventory order details and inventory needs alongside 
                  current costs. Food Vault will use this information securely 
                  to reduce your inventory costs.
                </p>
                <br />
                <Link href='/about' className='underline underline-offset-4 text-[17px] text-[#D1090FFF]'>
                  Learn More
                </Link>
              </div>
            </div>
            <div className='col-span-2 flex bg-[#FCBABDFF] h-[300px] rounded-3xl'>
              <div className='flex flex-col pt-5 pl-10 w-1/2'>
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Step 2:
                </text>
                <br />
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Data Aggregation
                </text>
                <p className='text-[17px]'>
                  Food Vault will then utilize the inventory data
                  from other kitchens in your local area to formulate 
                  an aggregated order that may be utilized in the 
                  negotiation of a reduced cost inventory order for all kitchens.
                </p>
                <br />
                <Link href='/about' className='underline underline-offset-4 text-[17px] text-[#D1090FFF]'>
                  Learn More
                </Link>
              </div>
              <div className='w-1/2 flex justify-center'>
                <Image
                  alt="data-aggregation"
                  src="/home-page/data-aggregation.svg"
                  width={245}
                  height={245}
                />
              </div>
            </div>
            <div className='col-span-2 flex bg-[#BDCDC4FF] h-[300px] rounded-3xl'>
              <div className='flex flex-col pt-5 pl-10 w-1/2'>
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Step 3:
                </text>
                <br />
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Contract Option
                </text>
                <p className='text-[17px]'>
                  Food Vault utilizes the aggregated inventory data 
                  from all localized kitchens and requests bids from 
                  both major and local suppliers to negotiate the best 
                  rate available to all kitchens based on the aggregated 
                  inventory data.
                </p>
                <br />
                <Link href='/about' className='underline underline-offset-4 text-[17px] text-[#D1090FFF]'>
                  Learn More
                </Link>
              </div>
              <div className='w-1/2 flex justify-center'>
                <Image
                  alt="contract-option-logo"
                  src="/home-page/contract-logo.svg"
                  width={245}
                  height={245}
                />
              </div>
            </div>
            <div className='bg-[#FEF1F1FF] h-[300px] rounded-3xl'>
              <div className='flex flex-col pt-5 pl-6'>
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Step 4:
                </text>
                <br />
                <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                  Direct Delivery
                </text>
                <p className='text-[17px]'>
                  The selected distributor delivers the inventory on
                  the agreed upon date at the negotiated price directly 
                  to each kitchen. All payment flows are processed 
                  by Food Vault to streamline the process.
                </p>
                <br />
                <Link href='/about' className='underline underline-offset-4 text-[17px] text-[#D1090FFF]'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='mt-12 flex flex-row w-full justify-between items-center h-56'>
          <h1>
            Are you Scroll down lazy ass
          </h1>
        </div> */}
      </div>
      <Footer />
    </main>
  )
}
