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
        <div>
          <div className='fixed h-[690px] w-full overflow-hidden z-1'>
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
                className={`w-[180px] h-[48px] md:w-[215px] md:h-[52px] ${inter.className} text-lg bg-white text-primary-500 rounded-[26px]`}
                onClick={() => router.push('/about')}
              >
                Learn More
            </button>
          </div>
        </div> 
      </div>
    </main>
  )
}
