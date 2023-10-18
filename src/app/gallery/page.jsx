import UploadImage from "../components/imageUploads/UploadImage"
import { CldImage } from 'next-cloudinary';
import cloudinary from 'cloudinary';
import ClientImage from "../components/imageUploads/ClientImage";
import UploadButton from "../components/imageUploads/UploadButton";

const page = async ({ searchParams, UploadResult }) => {
  const search = searchParams.search;
  const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(12)
    .execute();

  const resources = results.resources;
  const publicIds = resources.map(item => item.public_id);
  console.log(publicIds);

  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Gallery</h1>
        <UploadButton UploadResult={UploadResult} />
        {/* <UploadImage /> */}
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {publicIds?.map((publicId) => (
          <ClientImage
            key={publicId}
            publicId={publicId}
            width='400'
            height='300'
          />
        ))}
      </div>
    </section>
  )
}

export default page