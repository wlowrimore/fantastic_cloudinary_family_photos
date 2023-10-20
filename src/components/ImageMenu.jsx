import { FolderPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "@/app/components/icons/Menu"

const ImageMenu = () => {
  return (
    <div className='absolute top-2 right-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className='w-8 h-8 p-0'>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuItem>
            <FolderPlus className="mr-2 h-4 w-4" />
            <span>Add to Album</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ImageMenu
