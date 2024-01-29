// import Image from 'next/image'

import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";

export default function Home() {
  return (
    <>
      <div className="z-10">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Streamline Development with Pre-configured Auth
        </h1>
        <h2 className="mt-4 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-4xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Focus on Features, Not Authentication Setup
        </h2>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
        <div className="mt-4 text-center">
      <LoginButton asChild>
          <Button size="lg">
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign in
          </Button>
        </LoginButton>
      </div>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Button size="lg">
            Get Started
          </Button>
          <Button size="lg">
           <GitHubLogoIcon className="mr-2 h-4 w-4" /> Star on GitHub
          </Button>
        </div>
      </div>
    </>
  )
}
