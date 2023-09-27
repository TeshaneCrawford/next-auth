import './globals.css';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';

import ThemeRegistry from '@/lib/MuiRegistry/MuiThemeRegistry';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Next-Auth StarterKit',
  description:
    'Next-Auth StarterKit with, Next.js App Router + Material UI v5, Tailwind, and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box component="main"
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100dvh',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to bottom, #f2f2f2, #ffffff)',
            }}
          >
            {children}
            <Toaster />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
