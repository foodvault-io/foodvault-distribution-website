import Image from 'next/image'
import { useRouter } from 'next/router'
import { Epilogue, Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Head from 'next/head'

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
                  ${inter.className} text-lg bg-white text-primary-500 
                  rounded-[26px] hover:bg-neutral-300 hover:text-primary-500
                  hover:shadow-md active:bg-neutral-400 active:text-primary-500`}
                onClick={() => router.push('/about')}
              >
                Learn More
            </button>
          </div>
        </div> 
        <div className='flex flex-row w-full items-center justify-center h-[560px]'>
          <div className='bg-yellow-100 flex flex-col pr-56'>
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
              <p className={`m-0 text-sm ${inter.className} text-neutral-700 w-[480px] pt-3`}>
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
          <div className='flex w-[488px] h-[517px] bg-secondary-500 rounded-t-full'>
            <div className='overflow-hidden flex h-[484px] w-[488px]'>
                <Image
                  alt="jam-jar"
                  src="/home-page/jar-of-jam-1.jpg"
                  width={394}
                  height={450}
                  className='rounded-[197px]'
                />
            </div>
          </div>
        </div>
        <div className='mt-12 flex flex-row w-full justify-between items-center h-56'>
          <h1>
            Scroll down lazy ass
          </h1>
        </div>
        <div className=' mt-12 flex flex-row w-full justify-between items-center h-56'>
          <h1>
            I said Scroll down lazy ass
          </h1>
        </div>
        <div className='mt-12 flex flex-row w-full justify-between items-center h-56'>
          <h1>
            Are you Scroll down lazy ass
          </h1>
        </div>
      </div>
    </main>
  )
}
