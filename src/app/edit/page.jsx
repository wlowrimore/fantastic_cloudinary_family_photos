"use client";

import { CldImage } from "next-cloudinary";

const EditPage = ({ searchParams }) => {
  let { publicId } = searchParams;
  console.log(searchParams);

  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Edit {publicId}</h1>
      </div>

      <CldImage
        src={publicId}
        alt={publicId}
        width='300'
        height='200'
      />
    </section>
  )
}

export default EditPage