'use client'
import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const UploadButton = () => {
  const [imageId, setImageId] = useState('');
  const router = useRouter();

  const UploadResult = (result) => {
    setImageId(result.info.public_id);
    setTimeout(() => {
      router.refresh();
    }, 2000)
  }

  return (
    <Button asChild>
      <CldUploadButton
        onUpload={UploadResult}
        uploadPreset="photo-app">
        <div className='flex gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <span className='text-xl'>Upload</span>
        </div>
      </CldUploadButton>
    </Button>
  )
}

export default UploadButton