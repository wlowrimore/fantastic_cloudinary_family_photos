import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Nav = () => {
  return (
    <div className="border-b py-8">
      <div className="container mx-auto flex h-16 items-center px-4">
        REWTZ APP
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/wlowrimore.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default Nav