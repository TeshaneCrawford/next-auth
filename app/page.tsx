// import Image from 'next/image'

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";

export default function Home() {
  return (
    <main className="flex h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-gray-200">
      <h1>
        Next.js + Next Auth TypeScript Template
      </h1>
      <div>
        <LoginButton asChild>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  )
}
