'use client'

import { CldImage } from 'next-cloudinary';
import Heart from '../icons/Heart';
import FullHeart from '../icons/FullHeart';
import { useState, useTransition } from 'react';
import { setAsFavoriteAction } from '@/app/gallery/actions';
import ImageMenu from '@/components/ImageMenu';

const ClientImage = ({ publicId, result, path, onHeart, unheartedResource }) => {
  const [transition, startTransition] = useTransition();
  const [isFavorited, setIsFavorited] = useState(
    result.tags.includes('favorite')
  )

  return (
    <div className='relative'>
      <CldImage
        key={publicId}
        src={publicId}
        width="400"
        height="300"
        alt="somethin to see"
      />
      {isFavorited ? (
        <span onClick={() => {
          onHeart?.(resource);
          setIsFavorited(false);
          startTransition(() => {
            setAsFavoriteAction(publicId, false, path)
          })
        }} className='absolute top-2 left-2 text-red-500 hover:text-white cursor-pointer'>
          <FullHeart />
        </span>
      ) : (
        <span onClick={() => {
          setIsFavorited(true);
          startTransition(() => {
            setAsFavoriteAction(publicId, true, path)
          })
        }} className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'>
          <Heart />
        </span>
      )}
      <ImageMenu result={result} />
    </div>
  )
}

export default ClientImage