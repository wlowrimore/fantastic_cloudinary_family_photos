'use server'

import cloudinary from 'cloudinary'

export async function addImageToAlbum(result, album) {
  const existingFolder = await cloudinary.v2.api.create_folder(album)

  await cloudinary.v2.uploader.rename(
    result.public_id,
    `${album}/${result.public_id}`
  )
}
