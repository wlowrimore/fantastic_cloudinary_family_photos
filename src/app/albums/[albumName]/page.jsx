import cloudinary from 'cloudinary';
import { ForceRefresh } from '@/app/components/ForceRefresh';
import ImageGrid from "@/components/ImageGrid";

const GalleryPage = async ({ params: { albumName } }) => {

  const results = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute();

  return (
    <section>
      <ForceRefresh />
      <div className='flex flex-col'>
        <div className='flex w-full justify-between mb-8'>
          <h1 className='text-4xl font-bold uppercase tracking-wide'>{albumName} Album </h1>
        </div>
        <ImageGrid results={results} />
      </div>
    </section>
  )
}

export default GalleryPage