import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import Link from "next/link";
import Image from "next/image";

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

export function TabInfoCards(props: TabInfoCardsProps) {

  const colorVariantsButton: ColorVariants = {
    gray: 'bg-[#cecece] hover:bg-[#bfbfbf]',
    red: 'bg-[#fcbabd] hover:bg-[#fb9da2]',
    green: 'bg-[#bdcdc4] hover:bg-[#a8bdb1]',
    orange: 'bg-[#fef0f1] hover:bg-[#fde7e9]',
  }

  const colorVariantsDisplay: ColorVariants = {
    gray: 'bg-[#CECECEFF]',
    red: 'bg-[#fcbabd]',
    green: 'bg-[#BDCDC4FF]',
    orange: 'bg-[#FEF0F1FF]',
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
              height={50}
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className={`${colorVariantsDisplay[props.color]} w-[90%] mt-[50%] rounded-xl`}>
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <div className="flex text-center justify-center">
          <p className='text-[17px]'>
            {props.description}
          </p>
        </div>
      </DialogContent> 
    </Dialog>

      // <Tabs defaultValue="account" className="w-[300px]">
      //     <TabsList className="grid w-full grid-cols-4 bg-red-300">
      //       <TabsTrigger value="Inventory" className='bg-blue-200'>Inventory Curation</TabsTrigger>
      //       <TabsTrigger value="Data Aggregation" className='bg-purple-200'>Data Aggregation</TabsTrigger>
      //       <TabsTrigger value="password" className='bg-purple-200'>Contract Options</TabsTrigger>
      //       <TabsTrigger value="password" className='bg-purple-200'>Direct Delivery</TabsTrigger>
      //     </TabsList>
      //     <TabsContent value="account">
      //         <Card>
      //             <CardHeader>
      //                 <CardTitle>Account</CardTitle>
      //                 <CardDescription>
      //                   Make changes to your account here. Click save when youre done.
      //                 </CardDescription>
      //             </CardHeader>
      //             <CardContent className="space-y-2">
      //               <div className="space-y-1">
      //                 <Label htmlFor="name">Name</Label>
      //                 <Input id="name" defaultValue="Pedro Duarte" />
      //               </div>
      //               <div className="space-y-1">
      //                 <Label htmlFor="username">Username</Label>
      //                 <Input id="username" defaultValue="@peduarte" />
      //               </div>
      //             </CardContent>
      //             <CardFooter>
      //                 <Button>Save changes</Button>
      //             </CardFooter>
      //         </Card>
      //     </TabsContent>
      //     <TabsContent value="password">
      //         <Card>
      //             <CardHeader>
      //                 <CardTitle>Password</CardTitle>
      //                 <CardDescription>
      //                   Change your password here. After saving, youll be logged out.
      //                 </CardDescription>
      //             </CardHeader>
      //             <CardContent className="space-y-2">
      //                 <div className="space-y-1">
      //                   <Label htmlFor="current">Current password</Label>
      //                   <Input id="current" type="password" />
      //                 </div>
      //                 <div className="space-y-1">
      //                   <Label htmlFor="new">New password</Label>
      //                   <Input id="new" type="password" />
      //                 </div>
      //             </CardContent>
      //             <CardFooter>
      //                 <Button>Save password</Button>
      //             </CardFooter>
      //         </Card>
      //     </TabsContent>
      // </Tabs>   
  )
}