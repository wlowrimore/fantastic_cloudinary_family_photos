'use client'

import { CldImage } from 'next-cloudinary';

const ClientImage = ({ publicId }) => {
  return (
    <CldImage
      key={publicId}
      src={publicId}
      width="400"
      height="300"
      alt="somethin to see"
    />
  )
}

export default ClientImage