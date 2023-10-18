import React from 'react';

type Props = {
    title: string;
    description: string;
};

const BenefitsDistributorSection: React.FC<Props> = ({ title, description }) => {
    return (
        <div className='flex flex-col sm:mt-10 w-full justify-between items-center bg-[#A31115]'>
            <h2 className='text-white'>{title}</h2>
            <p className='text-white'>{description}</p>
        </div>
    );
};

export {BenefitsDistributorSection};
