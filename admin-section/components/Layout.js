import NavBar from "@/components/NavBar"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import Logo from "./Logo"

export default function Layout({children}) {
    const [showNav,setShowNav] = useState(false)
    const { data: session } = useSession()
    if (!session) {
        return (
        <div className="bg-bgGray w-screen h-screen flex items-center">
            <div className="text-center w-full">
            <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
            </div>
        </div>
        )
    }

    return (
        <div className="bg-bgGray min-h-screen">
            <div className="md:hidden flex items-center p-4">
            <button onClick={() => setShowNav(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
            </button>
            <div className="flex grow justify-center mr-6">
                <Logo />
            </div>
            </div>
            <div className="flex">
            <NavBar show={showNav} />
            <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
            </div>
        </div>
    )
}
