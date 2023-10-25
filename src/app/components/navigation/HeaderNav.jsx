import Image from "next/image"
import Link from "next/link";

import Logo from '/public/logo.png';
const Nav = () => {
  return (
    <nav className="py-8 container">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className='flex gap-4'>
          <Link href='/'>
            <Image src={Logo} priority width={100} height="auto" alt='site logo' className='opacity-80' />
          </Link>
          <h1 className='text-2xl'>Phun Photos App</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex gap-4 font-normal">


            <div className="bg-black text-white rounded-full p-4">

            </div>

            <div>
              <p className="text-2xl">

              </p>


            </div>
          </div>
        </div>
      </div>
    </nav>
    // <div className="border-b py-8">
    //   <div className="container mx-auto flex h-16 items-center px-4">
    //     REWTZ APP
    //     <div className="ml-auto flex items-center space-x-4">
    //       <Avatar>
    //         <AvatarImage src="https://github.com/wlowrimore.png" />
    //         <AvatarFallback>CN</AvatarFallback>
    //       </Avatar>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Nav