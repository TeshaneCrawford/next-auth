import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FiGithub } from 'react-icons/fi';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontSize: '6rem',
          fontWeight: 'bold',
        }}
      >
        Next-Auth StarterKit
      </Typography>
      <Typography variant="body1" gutterBottom>
        Next-Auth StarterKit with, Next.js App Router + Material UI v5,
        Tailwind, and Supabase
      </Typography>
      <Link href="https://github.com/TeshaneCrawford/next-auth">
        <Button variant="outlined" color="info" startIcon={<FiGithub />}>
          Star on Github
        </Button>
      </Link>
    </Box>
  );
}
