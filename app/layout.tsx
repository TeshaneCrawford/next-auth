import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js starter template with Auth.js',
  description: 'Next.js starter template with Auth.js, TypeScript, Tailwind CSS, and Vercel Analytics.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <div className="fixed h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 to-purple-100" />
          <Toaster />
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  )
}
