import * as React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { FiGithub } from 'react-icons/fi';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '3rem', md: '6rem' },
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Next-Auth StarterKit
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
          Next-Auth StarterKit with, Next.js App Router + Material UI v5,
          Tailwind, and Supabase
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Link href="https://github.com/TeshaneCrawford/next-auth">
          <Button variant="outlined" color="info" startIcon={<FiGithub />}>
            Star on Github
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
