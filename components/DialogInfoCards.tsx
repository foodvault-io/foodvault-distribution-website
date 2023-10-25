import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import Image from "next/image";
import { Inter, Epilogue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
  })

type ColorVariants = {
  [key in 'gray' | 'red' | 'green' | 'orange']: string;
}
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

interface TabInfoCardsProps {
  color: keyof ColorVariants;
  title: string;
  description: string;
  image: string | StaticImport;
  imageAlt: string;
}

export function DialogInfoCards(props: TabInfoCardsProps) {

  const colorVariantsButton: ColorVariants = {
    gray: 'bg-[#cecece] hover:bg-[#bfbfbf]',
    red: 'bg-[#fcbabd] hover:bg-[#fb9da2]',
    green: 'bg-[#bdcdc4] hover:bg-[#a8bdb1]',
    orange: 'bg-[#fef0f1] hover:bg-[#fde7e9]',
  }

  const colorVariantsDisplay: ColorVariants = {
    gray: 'bg-[#cecece]',
    red: 'bg-[#fcbabd]',
    green: 'bg-[#bdcdc4]',
    orange: 'bg-[#fef0f1]',
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`flex ${colorVariantsButton[props.color]} w-full h-[100px] rounded-[20px] shadow-xl items-center justify-between px-2`}>
          <div>
            <text className={`font-bold text-[15px] text-neutral-700`}>
              {props.title}
            </text>
          </div>
          <div>
            <Image
              alt={props.imageAlt}
              src={props.image}
              width={100}
              height={40}
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className={`${colorVariantsDisplay[props.color]} w-[90%] mt-[50%] rounded-xl`}>
        <DialogHeader>
          <DialogTitle className={`${epilogue.className} font-bold`}>{props.title}</DialogTitle>
        </DialogHeader>
        <div className="flex text-center justify-center">
          <p className={`${inter.className} text-[17px]`}>
            {props.description}
          </p>
        </div>
      </DialogContent> 
    </Dialog>
  )
}