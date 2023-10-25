import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const EmailSubmission = () => {
    return (
        <div className='flex w-full max-w-sm items-center space-x-2 mt-4'>
            <Input type="email" placeholder="Email" />
            <Button 
                type="submit" 
                className={`${inter.className} text-white bg-[#F51920FF]
                text-[12px] leading-5 opacity-100 
                border-none hover:bg-[#D1090FFF]
                active:bg-[#B8080EFF]`}
            >
                Subscribe
            </Button>
        </div>
    )
}