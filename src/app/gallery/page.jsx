import cloudinary from 'cloudinary';
import UploadButton from "../components/imageUploads/UploadButton";
import { ForceRefresh } from "../components/ForceRefresh";
import ImageGrid from "@/components/ImageGrid";
import SearchForm from "./SearchForm";

const GalleryPage = async ({ searchParams, UploadResult }) => {
  const search = searchParams.search;
  const results = await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ''}`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute();

  return (

    <section className='flex flex-col'>
      <ForceRefresh />
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Gallery</h1>
        <UploadButton UploadResult={UploadResult} />
      </div>

      <SearchForm initialSearch={search} />

      <ImageGrid results={results} />
    </section>
  )
}

export default GalleryPage