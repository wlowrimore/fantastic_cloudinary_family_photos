import cloudinary from 'cloudinary';
import ClientImage from "../components/imageUploads/ClientImage";
import { ForceRefresh } from '../components/ForceRefresh';
import ImageGrid from '@/components/ImageGrid';

const FavoritesPage = async ({ searchParams, UploadResult }) => {
  const search = searchParams.search;
  const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute();

  console.log("results:", results)

  return (
    <section className='flex flex-col'>
      <ForceRefresh />
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Favorite Images</h1>
      </div>
      <ImageGrid results={results} />
    </section>
  )
}

export default FavoritesPage