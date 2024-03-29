
import Link from "next/link";
import Image from "next/image";
import { Inter, Epilogue } from 'next/font/google'
import { useState, useEffect } from "react";
import { DialogInfoCards } from "./DialogInfoCards";

const inter = Inter({ subsets: ['latin'] })

const epilogue = Epilogue({
    subsets: ['latin'],
    display: 'swap',
  })

export function InformationCards() {
    const [width, setWidth] = useState<number>(350);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 767 ? true : false);
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 767 ? true : false);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    if (isMobile) {
      return (
          <div className='flex flex-col w-full justify-between items-center h-[265px] mt-10'>
            <div className='w-full flex justify-center items-center h-[50px]'>
              <h1 className={`${epilogue.className} text-2xl sm:text-5xl leading-9 text-[#323743FF] font-bold`}>
                What Does Food Vault Do?
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-1 h-[210px] w-full pl-3 pr-3 mt-5 items-center justify-center">
              <DialogInfoCards 
                color='gray' 
                title='Inventory Curation' 
                description='Utilize our easy forecasting tools to input your existing
                inventory order details and inventory needs alongside 
                current costs. Food Vault will use this information securely 
                to reduce your inventory costs.' 
                image='/home-page/info-cards/security.svg'
                imageAlt="inventory-curation"
              />
              <DialogInfoCards 
                color='red'
                title='Data Aggregation'
                description='Food Vault will then utilize the inventory data
                from other kitchens in your local area to formulate 
                an aggregated order that may be utilized in the 
                negotiation of a reduced cost inventory order for all kitchens.'
                image='/home-page/info-cards/data-aggregation.svg'
                imageAlt="data-aggregation"
              />
              <DialogInfoCards 
                color='green'
                title='Contract Option'
                description='Food Vault utilizes the aggregated inventory data 
                from all localized kitchens and requests bids from 
                both major and local suppliers to negotiate the best 
                rate available to all kitchens based on the aggregated 
                inventory data.'
                image='/home-page/info-cards/contract-logo.svg'
                imageAlt="contract-option"
              />
              <DialogInfoCards 
                color='orange'
                title='Direct Delivery'
                description='The selected distributor delivers the inventory on
                the agreed upon date at the negotiated price directly 
                to each kitchen. All payment flows are processed 
                by Food Vault to streamline the process.'
                image='/home-page/info-cards/direct-delivery.svg'
                imageAlt="direct-delivery"
              />
            </div>
          </div>
      )
    } else {
      return (
          <div className='flex flex-col sm:mt-10 w-full justify-between items-center'>
              <div className='w-full flex justify-center h-[100px]'>
                <h1 className={`${epilogue.className} text-2xl sm:text-5xl leading-10 text-neutral-700 font-bold`}>
                  What Does Food Vault Do?
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-4 h-[600px] mx-24">
                <div className='flex bg-[#CECECEFF] h-[300px] rounded-3xl'>
                  <div className='flex flex-col pt-5 pl-6 '>
                    <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                      Step 1:
                    </text>
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
                  </div>
                </div>
                <div className='col-span-2 flex bg-[#FCBABDFF] h-[300px] rounded-3xl'>
                  <div className='flex flex-col pt-5 pl-10 w-1/2'>
                    <text className={`${epilogue.className} font-bold text-[32px] leading-[48px] text-neutral-700`}>
                      Step 2:
                    </text>
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
                  </div>
                  <div className='w-1/2 flex justify-center'>
                    <Image
                      alt="data-aggregation"
                      src="/home-page/info-cards/data-aggregation.svg"
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
                  </div>
                  <div className='w-1/2 flex justify-center'>
                    <Image
                      alt="contract-option-logo"
                      src="/home-page/info-cards/contract-logo.svg"
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
                  </div>
                </div>
              </div>
          </div>
      )
    }
}