'use server'

import cloudinary from 'cloudinary'

export async function addImageToAlbum(result, album) {
  await cloudinary.v2.api.create_folder(album)

  let sections = result.public_id.split('/');
  if (sections.length > 1) {
    sections = sections.slice(1);
  }
  const publicId = sections.join('/');

  await cloudinary.v2.uploader.rename(
    result.public_id,
    `${album}/${publicId}`
  )
}
