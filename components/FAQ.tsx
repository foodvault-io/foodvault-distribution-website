import React, {useEffect, useState} from 'react'
import {
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  const [width, setWidth] = useState<number>(350);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 480 ? true : false);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 480 ? true : false);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  if (isMobile) {
    return (
      <div className='flex flex-col mt-10 pb-10 sm:mt-10 w-full justify-between items-center'>
        <h1 className='text-2xl font-bold pt-10 pb-5'>Frequently Asked Questions</h1>
        <Accordion type='single' collapsible className='w-[80%] h-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>How does Food Vault make money?</AccordionTrigger>
            <AccordionContent>
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
            <AccordionTrigger>What is the process after inventory data has been provided to Food Vault?</AccordionTrigger>
            <AccordionContent>
              Food Vault is actively involved in its gathering of inventory information to ensure that each partner kitchen and restaurant is receiving an optimal rate on every order. Our platform enables kitchen operators to provide this information actively or passively and continuously review order information as needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>How do I manage my order?</AccordionTrigger>
            <AccordionContent>
              Food Vault opens the door not only to restaurants and kitchens for optimal inventory rates, but it also opens the door for distributors whom are looking to expand their operations to new markets,  obtain new orders, or are simply looking to fill an empty truck with an order. Food Vault also opens the door for many resturants and kitchens to distributors and inventory that may not have been available otherwise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Who does the delivery?</AccordionTrigger>
            <AccordionContent>
              Food Vault is structured to provide savings to local restaurants and kitchens, thus, it does not force periodic orders and there is no excluse
              requirement that states you must order via Food Vault. Food Vault is a resource for your disposal that is meant to reduce your costs. Additionally, Food Vault does not profit unless it can offset those profits from your savings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Is this a subscription? Can I cancel using your service?</AccordionTrigger>
            <AccordionContent>
              Food Vault is structured to provide savings to local restaurants and kitchens, thus, it does not force periodic orders and there is no excluse
              requirement that states you must order via Food Vault. Food Vault is a resource for your disposal that is meant to reduce your costs. Additionally, Food Vault does not profit unless it can offset those profits from your savings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  } else {
    return (
      <div>
        <h3>FAQ</h3>
        <p>FAQ Section Booiiiii</p>
      </div>
    )
  }
}

export {FAQ}