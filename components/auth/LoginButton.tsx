'use client'

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({ children, mode = "redirect", asChild = false }: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
      };

      if (mode === "modal") {
        return (
          <span>
            TODO: Login modal
          </span>
        )
      }

    return (
        <span onClick={onClick} className="cursor-pointer">
          {children}
        </span>
      );
};