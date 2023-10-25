import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const BenefitsDistributorSection = () => {
    const [width, setWidth] = useState<number>(350);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 767 ? true : false);
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 767 ? true : false);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if (isMobile) {
        return (
            <div id='BenefitsDistributor' className='flex flex-col pt-10 pb-10 sm:pt-10 w-full justify-between items-center bg-[#A31115]'>
                <h1 className='text-white text-2xl font-bold pb-5'>Benefits to Distributors</h1>
                <Accordion type='single' collapsible className='w-[80%] h-full'>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger className='text-white'>Access to new customers</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Our relationships with suppliers and distributors has grown to show that many rely on existing customers to have repeat sales. Although this is a great cash cow, it is not a means of growth for business. Most distributors have optimized their internal operations, thus, having access to new customers or those customers that competitors have access to, distributors can once again inject a growth aspect to the business bottom line.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                        <AccordionTrigger className='text-white'>Recurring orders</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Our relationships with suppliers and distributors allow for the ability to place recurring orders if our clients are pleased with our service and the service of the suppliers and distributors. Working as a partner supplier/distributor with Food Vault all but insures that a recurring order will be placed during our partnership and allow for a better understanding of industry/client ordering habits.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3'>
                        <AccordionTrigger className='text-white'>Increased Inventory Turnover</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Understanding the cost of holding inventory is paramount to understanding the importance of releasing that inventory at an optimal turnover rate. Food Vault helps suppliers and distributors achieve a faster inventory turnover rate by purchasing larger quanities of items for our clients. In short, the more optimal the price for Food Vault, the more optimal the turnover rate for the suppliers and distributors.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    } else {
        return (
            <div id='BenefitsDistributor' className='bg-green-200 flex flex-row justify-between w-full h-[200px] mt-4'>
                <h1>Benefits of FoodVault</h1>
            </div>
        )
    }
};

export { BenefitsDistributorSection };
