// import UploadImage from "../components/imageUploads/UploadImage"
import cloudinary from 'cloudinary';
import AlbumCard from './AlbumCard';
// import ClientImage from "../components/imageUploads/ClientImage";
// import UploadButton from "../components/imageUploads/UploadButton";
// import { ForceRefresh } from "../components/ForceRefresh";
// import ImageGrid from "@/components/ImageGrid";

const AlbumsPage = async () => {
  const { folders } = await cloudinary.v2.api.root_folders()

  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between mb-8'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Albums</h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {folders.map((folder) => (
          <AlbumCard key={folder.path} folder={folder} />
        ))}
      </div>
    </section>
  )
}

export default AlbumsPage