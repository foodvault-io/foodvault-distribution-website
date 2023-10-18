import React from 'react'

type Props = {
    question: string;
    answer: string;
}

const FAQ: React.FC<Props> = ({question, answer}) => {
  return (
    <div>
        <h3>{question}</h3>
        <p>{answer}</p>
    </div>
  )
}

export {FAQ}