import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    // create a new about page with header component
    return (
        <main>
            <Head>
              <title>Food Vault - About Us</title>
            </Head>
            <Header />
            <div className="flex min-h-screen flex-col md:mt-20 mt-16">
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-4xl font-bold text-center">
                        What is Food Vault?
                    </h1>
                    <p className="text-center">
                        Food Vault is a web application that allows users to
                        find and share food resources in their community. We
                        believe that everyone should have access to food, and
                        that food insecurity is a problem that can be solved
                        with the help of technology.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-4xl font-bold text-center">
                        How does it work?
                    </h1>
                    <p className="text-center">
                        Food Vault is a web application that allows users to
                        find and share food resources in their community. We
                        believe that everyone should have access to food, and
                        that food insecurity is a problem that can be solved
                        with the help of technology.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-4xl font-bold text-center">
                        How can I help?
                    </h1>
                    <p className="text-center">
                        Food Vault is a web application that allows users to
                        find and share food resources in their community. We
                        believe that everyone should have access to food, and
                        that food insecurity is a problem that can be solved
                        with the help of technology.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}