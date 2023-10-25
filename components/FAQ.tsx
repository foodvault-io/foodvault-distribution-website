/* eslint-disable react/no-unescaped-entities */
import React, {useEffect, useState} from 'react'
import {
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  return (
    <div className='flex flex-col mt-10 pb-10 sm:mt-10 w-full justify-between items-center' id='FAQ'>
      <h1 className='text-2xl font-bold pt-10 pb-5'>Frequently Asked Questions</h1>
      <Accordion type='single' collapsible className='w-[80%] h-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>How does Food Vault make money?</AccordionTrigger>
          <AccordionContent>
            Food Vault charges the restaurant or kitchen looking to save money via our service a "service charge" per order. This charge is dependent upon the order size, however, the ranges for service charges range from $10.99 to $39.99 (USD) per order. However, there is a minimum order total of $300 which is mandatory for Food Vault to best negotiate prices with vendors. The best part about partnering with Food Vault is that the service charge is only charged if we are able to save you more money than the cost of the service charge.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>What is the process after inventory data has been provided to Food Vault?</AccordionTrigger>
          <AccordionContent>
            Food Vault will take the data that you provide via our data collection process (i.e. the previous inventory order that you have placed with distributors/suppliers and their costs/quantities/descriptions/etc.) and aggregate this information. Food Vault will pair your order with orders from other restaurants and kitchens in your area to create a large bulk order. We will then ask supplier to place a bid on this large bulk order with the caveat that the individual restaurant orders must be delivered to each individual restaurant as the order was placed. Food Vault will select the most competitve bid and pass on savings to the restauarant/kitchen proportional to total order size. In other words, a restaurant/kitchen that places a larger order will receive a larger total savings versus a kitchen that places a smaller order.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>How do I manage my order?</AccordionTrigger>
          <AccordionContent>
            After an order has been placed with Food Vault, we will begin the ordering/bidding process with vendors. Thus, orders may not be amended after an order is placed. Once Food Vault has selected a vendor, Food Vault will prompt you to confirm your order. In this prompt, Food Vault will share all delivery information and vendor information that it possess. Food Vault does not take responsibility for any delivery issues nor does it manage the delivery process. Thus, if there are any questions or issues with delivery, you may contact the vendor directly. However, in the final prompt prior to order confirmation, you may be able to make minor changes to your order and provide delivery instructions / preferences, however, these changes will be at the discretion of the vendor. All information related to your order will be shared to your account via our platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Who does the delivery?</AccordionTrigger>
          <AccordionContent>
            Food Vault does not take responsibility for any delivery issues nor does it manage the delivery process. Thus, if there are any questions or issues with delivery, you may contact the vendor directly. Food Vault will share a final prompt prior to order confirmation in which you may be able to make minor changes to your order and provide delivery instructions / preferences, however, these changes will be at the discretion of the vendor. All information related to your order will be shared to your account via our platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>Is this a subscription? Can I cancel using your service?</AccordionTrigger>
          <AccordionContent>
            Food Vault's service is on a per order basis. This is not a subscription as we charged based on each individual order. However, please keep in mind that recurring orders without a disruption in delivery generally have larger savings as vendors are able to clear their inventory more quickly. If you would like to stop using our service, you may simply not place an order with us, however, the savings that you experience on a per order basis will also cease.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export {FAQ}