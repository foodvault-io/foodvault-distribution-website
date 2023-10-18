import React from 'react';

interface Props {
    benefits: string[];
}

const BenefitsSection: React.FC<Props> = ({ benefits }) => {
    return (
        <div className='flex flex-col sm:mt-10 w-full justify-between items-center bg-[#1F3F2E]'>

            <h2 className='text-white'>Benefits</h2>
            <ul className='text-white'>
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
    );
};

export {BenefitsSection};
