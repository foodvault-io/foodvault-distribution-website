import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function FAQ() {
    return(
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Head>
                <title>Food Vault - FAQ</title>
            </Head>
            <Header/>
            <div>
                <h1 className="text-4xl font-bold text-center">
                    Frequently Asked Questions (FAQ)
                </h1>
            </div>
        </main>
    )
}