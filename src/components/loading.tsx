import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function Loading() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6 text-center bg-[#FBF5FB]">
      <h1 className="text-3xl font-bold text-[#2B1E50]">Loading...</h1>
    </div>
  )
}