import Image from 'next/image'
import Link from 'next/link'
import Hero from '/public/hero_photo.svg'

export default function Home() {
  return (
    <section className=''>
      <div className='flex items-center justify-between gap-x-24'>
        <div className='flex-1 font-bold bg-gradient-to-b from-cyan-900 to-neutral-300 bg-clip-text text-transparent'>
          <h1 className='text-7xl uppercase'>Phun photos</h1>
          <h2 className="text-4xl tracking-wider leading-10">A site where you can upload your photos, and have some <em className='text-rose-300'>phun</em> with them too!</h2>
        </div>
        <div className='animate-hero-spin'>
          <Image src={Hero} alt='hero' width={400} height={400} />
        </div>
      </div>
      <p className='text-xl font-light text-justify tracking-wide'>This site is all about having fun with a technology called Cloudinary. Cloudinary makes uploading images faster, more efficient, and fun.  The team at Cloudinary brings you cutting-edge Artificial Intelligence (AI) features that allow you to alter your images in various ways.  This site doesn't even scratch the surface, but this site, is also, an ongoing project that will, piece-by-piece and little-by-little, begin to add in some of these awesome features.  In the mean time, have a little fun with it and keep your eyes peeled for upcoming additions to the image editing functionality.</p>
    </section>
  )
}
