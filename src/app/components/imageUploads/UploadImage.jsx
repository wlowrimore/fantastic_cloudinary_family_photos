"use client";

import { useState } from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';

const UploadImage = () => {
  const [imageId, setImageId] = useState('');

  const UploadResult = (result) => {
    setImageId(result.info.public_id);
  }

  return (
    <div className=''>
      <Button asChild>
        <div className='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>

          <CldUploadButton
            onUpload={UploadResult}
            uploadPreset="photo-app" />
        </div>
      </Button>
      <div>
        {imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>

    </div>
  )
}

export default UploadImage