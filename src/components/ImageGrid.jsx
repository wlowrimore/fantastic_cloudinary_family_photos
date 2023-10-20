import ClientImage from "@/app/components/imageUploads/ClientImage";


const MAX_COLUMNS = 4;

const ImageGrid = ({ results }) => {

  const getColumns = (colIndex) => {
    return results.resources.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex
    })
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
      ].map((column, idx) => (
        <div key={idx} className='flex flex-col gap-4'>

          {column.map((result) => (
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
      ))}
    </div>
  )
}

export default ImageGrid