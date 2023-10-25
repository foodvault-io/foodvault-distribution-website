import React, {useEffect, useState} from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const BenefitsSection = () => {
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
            <div id='BenefitsSection' className='flex flex-col mt-10 pb-10 sm:mt-10 w-full justify-between items-center bg-[#1F3F2E]'>
                <h1 className='text-white text-2xl font-bold pt-10 pb-5'>The Benefits of Food Vault</h1>
                <Accordion type='single' collapsible className='w-[80%] h-full'>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger className='text-white'>1. Lower Costs for Kitchens</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Food Vault partners with local kitchens and
                            restaurants by examining their inventory ordering
                            practices, order history, costs, suppliers, etc.
                            Food Vault primarily utilizes this information to
                            bulk inventory orders from multiple kitchens and utilize
                            these orders to negotiate a more optimal rate from distributors
                            and pass these savings onto our partner kitchens and restaurants.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                        <AccordionTrigger className='text-white'>2. Active Inventory Management</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Food Vault is actively involved in its gathering of inventory information to ensure that each partner kitchen and restaurant is receiving an optimal rate on every order. Our platform enables kitchen operators to provide this information actively or passively and continuously review order information as needed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3'>
                        <AccordionTrigger className='text-white'>3. New Customers at your fingertips</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Food Vault opens the door not only to restaurants and kitchens for optimal inventory rates, but it also opens the door for distributors whom are looking to expand their operations to new markets,  obtain new orders, or are simply looking to fill an empty truck with an order. Food Vault also opens the door for many resturants and kitchens to distributors and inventory that may not have been available otherwise.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-4'>
                        <AccordionTrigger className='text-white'>4. Order on your terms</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Food Vault is structured to provide savings to local restaurants and kitchens, thus, it does not force periodic orders and there is no exclusivity requirement that states you must order via Food Vault. Food Vault is a resource for your disposal that is meant to reduce your costs. Additionally, Food Vault does not profit unless it can offset those profits from your savings.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-5'>
                        <AccordionTrigger className='text-white'>5. Build multiple food concepts</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            Having access to multiple distributors whom may not have been available to you before or being offerred additional menu ingredients that were previously too pricey at a reduced costs allows our local kitchens and resturants to expand their menus or explore the possibility of building multiple food concepts.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-6'>
                        <AccordionTrigger className='text-white'>6. Lower costs, higher profits</AccordionTrigger>
                        <AccordionContent className='text-white'>
                            When your inventory and overhead costs go down, even marginally, your profits go up.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    } else {
        return (
            <div id='BenefitsSection' className='bg-green-200 flex flex-row justify-between w-full h-[200px] mt-4'>
                <h1>Benefits of FoodVault</h1>
            </div>
        )
    }
};

export {BenefitsSection};
