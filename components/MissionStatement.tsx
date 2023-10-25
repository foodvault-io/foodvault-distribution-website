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
      </div>
  )
}

export {MissionStatement}