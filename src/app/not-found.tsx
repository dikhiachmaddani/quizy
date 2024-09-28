import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6 text-center bg-[#FBF5FB]">
      <h1 className="text-3xl font-bold text-[#2B1E50]">404 Not Found :(</h1>
      <Link href={'/'} className="bg-[#6DB162] px-6 py-4 text-xs text-white font-bold rounded-full">
        Back To Main Menu
      </Link>
    </div>
  )
}