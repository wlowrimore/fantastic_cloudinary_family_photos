"use client";

import { useState } from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import UploadButton from './UploadButton';

const UploadImage = () => {
  const [imageId, setImageId] = useState('');
  const router = useRouter();

  // const UploadResult = (result) => {
  //   setImageId(result.info.public_id);
  //   router.refresh();
  // }

  return (
    <div className=''>
      {/* <UploadButton UploadResult={UploadResult} /> */}
      {/* {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )} */}
    </div>
  )
}

export default UploadImage