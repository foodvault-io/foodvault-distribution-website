import React from 'react'
import Image from 'next/image';

interface Props {
    source: string;
    alt: string;
}

const FooterSocialLogo: React.FC<Props> = ({source, alt}) => {
  return (
      <a href='#' className='text-gray-500 hover:text-gray-900'>
          <Image
              src={source}
              alt={alt}
              width={24} height={24}
          />
      </a>
  )
}

export {FooterSocialLogo}