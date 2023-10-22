"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const EditPage = ({ searchParams }) => {
  let { publicId } = searchParams;

  const [transformation, setTransformation] = useState();
  const [pendingPrompt, setPendingPrompt] = useState('');
  const [prompt, setPrompt] = useState('');

  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Edit {publicId}</h1>
      </div>

      <div className='flex gap-4'>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => {
              setTransformation("generative-fill");
              setPrompt(pendingPrompt);
            }}
          >
            Apply Generative Fill
          </Button>
          <Label>Prompt</Label>
          <Input
            className='bg-neutral-500'
            value={pendingPrompt}
            onChange={(e) => setPendingPrompt(e.currentTarget.value)}
          />
        </div>

        <Button onClick={() => setTransformation('blur')}>Apply Blur</Button>
        <Button onClick={() => setTransformation('zoom')}>Zoom & Pan</Button>
        <Button onClick={() => setTransformation('pixelate')}>Pixelate</Button>
        <Button onClick={() => setTransformation('grayscale')}>Convert to Grayscale</Button>
        <Button onClick={() => setTransformation('tint')}>Tint</Button>
        <Button variant='destructive' onClick={() => setTransformation(undefined)}>Clear Filter</Button>
      </div>

      <div className='grid grid-cols-2 mt-8'>
        <CldImage
          src={publicId}
          alt={publicId}
          width='400'
          height='300'
        />

        {transformation === 'generative-fill' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1400'
            height='1200'
            crop="pad"
            fillBackground={{
              prompt
            }}
          />
        )}

        {transformation === 'blur' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1800'
            height='1200'
            blur="1200"
          />
        )}

        {transformation === 'zoom' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1800'
            height='1200'
            zoompan="loop"
          />
        )}

        {transformation === 'pixelate' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1800'
            height='1200'
            pixelate
          />
        )}

        {transformation === 'grayscale' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1800'
            height='1200'
            grayscale
          />
        )}

        {transformation === 'tint' && (
          <CldImage
            src={publicId}
            alt={publicId}
            width='1800'
            height='1200'
            tint="equalize:80:blue:blueviolet"
          />
        )}
      </div>
    </section>
  )
}

export default EditPage