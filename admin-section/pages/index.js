import Layout from "@/components/Layout"
import {useSession} from "next-auth/react"
import Image from "next/image"

export default function Home() {
  const {data: session} = useSession()
  if(!session) return
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
      Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg bg-gray-300 gap-1 text-block rounded-lg overflow-hidden">
      <Image src={session?.user?.image} alt="" className="w-8 h-8" />
      <span className="px-2">
      {session?.user?.name}
      </span>
      </div>      
    </div>
  </Layout>
}
