'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { set, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/validations/auth';
import { Input } from '@/components/input';
import { buttonVariants } from '@/components/button';
import { LuLoader2 } from 'react-icons/lu';
import { RiGoogleFill } from 'react-icons/ri';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormValues = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(userAuthSchema),
  });

  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);

  async function onSubmit(values: FormValues) {
    setIsLoading(true);

    const signInResult = await signIn('email', {
      email: values.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') ?? '/',
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast.error(signInResult?.error ?? 'Something went wrong');
    }

    return toast.success(
      'Check your email for the sign in link. Be sure to check your spam folder.'
    );
  }

  return (
    <section className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading}
              {...register('email')}
            />
            {errors.email && (
              <p className="px-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            className={cn(buttonVariants())}
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign in with email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <button
          type="button"
          className={cn(buttonVariants({ variant: 'outline' }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
          }}
          disabled={isLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RiGoogleFill className="mr-2 h-4 w-4" />
          )}{' '}
          Google
        </button>
      </div>
    </section>
  );
}
