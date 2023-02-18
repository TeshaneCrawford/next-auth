import { AuthOptions } from './../../../../node_modules/next-auth/core/types.d';
import type { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

import { Client } from 'postmark';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Prisma } from '@/lib/prismadb';

// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN);

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(Prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        // GoogleProvider({}),
        // FacebookProvider({}),
        // EmailProvider({}),
        // CredentialsProvider({}),
    ],
};