// mark as client component
"use client";

import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="w-96 h-96 flex flex-col justify-center items-center gap-2 shadow shadow-red-300 rounded-lg">
          <p className="text-zinc-800 text-2xl">Welcome <span className="text-2xl text-red-400">{session.user?.name}</span></p>
          <p className="text-xl text-zinc-800">Signed In As</p>
          <p className="text-red-400">{session.user?.email}</p>
          <Button onClick={() => signOut()} size={"lg"}>Sign out</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-96 h-96 flex flex-col justify-center items-center gap-2 shadow shadow-red-400">
        <p className="text-4xl text-red-400">Sign</p>
        <Button onClick={() => signIn('github')} size="lg">
          Github
        </Button>
      </div>
    </div>
  )

}