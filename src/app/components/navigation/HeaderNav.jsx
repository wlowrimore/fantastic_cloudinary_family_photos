import Image from "next/image"
import Link from "next/link";
import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server"

import Logo from '/public/logo.png';
const Nav = () => {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <nav className="py-8 container">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className='flex gap-4'>
          <Link href='/'>
            <Image src={Logo} width={100} height={100} alt='site logo' className='opacity-80' />
          </Link>
          <h1 className='text-2xl'>Photo App</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {!isAuthenticated() ? (
            <>
              <LoginLink className="bg-black text-white px-4 py-2 rounded">Login</LoginLink>
              <RegisterLink className="bg-black text-white px-4 py-2 rounded">Signup</RegisterLink>
            </>
          ) : (
            <div className="flex gap-4 font-normal">
              {user?.picture ? (
                <Image
                  className="rounded-full"
                  src={user?.picture}
                  width={55}
                  height={55}
                  alt="user profile avatar"
                />
              ) : (
                <div className="bg-black text-white rounded-full p-4">
                  {user?.given_name?.[0]}
                  {user?.family_name?.[0]}
                </div>
              )}
              <div>
                <p className="text-2xl">
                  {user?.given_name} {user?.family_name}
                </p>

                <LogoutLink className="text-neutral-300">Log out</LogoutLink>
              </div>
            </div>
          )}
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