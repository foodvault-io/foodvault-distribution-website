import React from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    missionStatement: string;
}

const MissionStatement: React.FC<Props> = ({ title, missionStatement}) => {
  return (
      <div className='flex flex-col my-10 sm:mt-10 w-full justify-between items-center'>
        <h2 className='italic mb-5 text-[20px]'>{title}</h2>
        <p className='text-center text-[24px]'>{missionStatement}</p>
        <Image className='rotate-180'
          alt="Quotes"
          src="/air_quotes.svg"
          width={100}
          height={100}
        />
      </div>
  )
}

export {MissionStatement}