import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
    return (
        <main>
            <Head>
                <title>Food Vault - Sign Up</title>
            </Head>
            <Header />
            <div className="flex min-h-screen flex-col md:mt-20 mt-16">
                <h1 className="text-4xl font-bold text-center">
                    Sign Up Bitch 
                </h1>
            </div>
            <Footer />
        </main>
    )
}
