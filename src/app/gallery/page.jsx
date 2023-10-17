import { CldUploadButton } from "next-cloudinary"
import UploadImage from "../components/imageUploads/UploadImage"

const page = () => {
  return (
    <section className='w-full'>
      <div className='flex w-full justify-between'>
        <h1 className='text-4xl font-bold uppercase tracking-wide'>Gallery</h1>
        <UploadImage />
      </div>
    </section>
  )
}

export default page