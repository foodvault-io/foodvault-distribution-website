import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    // create a new about page with header component
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Header />
            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
        </main>
    )
}