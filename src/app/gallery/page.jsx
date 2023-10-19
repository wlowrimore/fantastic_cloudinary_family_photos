import UploadImage from "../components/imageUploads/UploadImage"
import cloudinary from 'cloudinary';
import ClientImage from "../components/imageUploads/ClientImage";
import UploadButton from "../components/imageUploads/UploadButton";
import { ForceRefresh } from "../components/ForceRefresh";

const GalleryPage = async ({ searchParams, UploadResult }) => {
  const search = searchParams.search;
  const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute();

  console.log("results:", results)

  return (
    <section className='flex flex-col'>
      <ForceRefresh />
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Gallery</h1>
        <UploadButton UploadResult={UploadResult} />
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {results.resources.map((result) => (
          <ClientImage
            path='/gallery'
            key={result.public_id}
            publicId={result.public_id}
            result={result}
            width='400'
            height='300'
          />
        ))}
      </div>
    </section>
  )
}

export default GalleryPage