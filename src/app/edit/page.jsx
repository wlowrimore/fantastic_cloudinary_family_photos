"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const EditPage = ({ searchParams }) => {
  let { publicId } = searchParams;

  const [transformation, setTransformation] = useState();

  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Edit {publicId}</h1>
      </div>

      <div className='flex gap-4'>
        <Button variant='destructive' onClick={() => setTransformation(undefined)}>Clear All</Button>
        <Button onClick={() => setTransformation('blur')}>Apply Blur</Button>
        <Button onClick={() => setTransformation('zoom')}>Zoom & Pan</Button>
        <Button onClick={() => setTransformation('generative-fill')}>Apply Generative Fill</Button>
        <Button onClick={() => setTransformation('pixelate')}>Pixelate</Button>
        <Button onClick={() => setTransformation('grayscale')}>Convert to Grayscale</Button>
        <Button onClick={() => setTransformation('tint')}>Tint</Button>
        <Button onClick={() => setTransformation('rmv-bg')}>Remove Background</Button>
      </div>

      <div className='grid grid-cols-2 mt-8'>
        <CldImage
          src={publicId}
          alt={publicId}
          width='300'
          height='200'
        />

        {transformation === 'generative-fill' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            crop="pad"
            fillBackground
          />
        )}

        {transformation === 'blur' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            blur="1200"
          />
        )}

        {transformation === 'zoom' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            zoompan="loop"
          />
        )}

        {transformation === 'pixelate' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            pixelate
          />
        )}

        {transformation === 'grayscale' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            grayscale
          />
        )}

        {transformation === 'tint' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            tint="equalize:80:blue:blueviolet"
          />
        )}

        {transformation === 'rmv-bg' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='300'
            height='200'
            removeBackground
          />
        )}
      </div>
    </section>
  )
}

export default EditPage