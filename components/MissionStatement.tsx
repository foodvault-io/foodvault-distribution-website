import React from 'react'

type Props = {
    title: string;
    missionStatement: string;
}

const MissionStatement: React.FC<Props> = ({ title, missionStatement}) => {
  return (
      <div className='flex flex-col sm:mt-10 w-full justify-between items-center'>
        <h2>{title}</h2>
        <p>{missionStatement}</p>
    </div>
  )
}

export {MissionStatement}