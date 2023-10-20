import { FolderPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "@/app/components/icons/Menu"
import AddToAlbumDialog from "./AddToAlbumDialog"

const ImageMenu = ({ result }) => {
  return (
    <div className='absolute top-2 right-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className='w-8 h-8 p-0'>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog result={result} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ImageMenu
