'use client';
import { Backdrop, CircularProgress } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const AuthPage = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({ required: true });

  useEffect(() => {
    // @ts-ignore
    if (session?.error === 'RefreshAccessTokenError') {
      signOut(); // Force sign in to hopefully resolve error
    }
  }, [session]);

  // console.log(session, status);

  if (status === 'authenticated') {
    // console.log(session)
    return children;
  }
  // 🚩
  return (
    <div>
      <Backdrop
        sx={{ color: '#F5F5F5', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default AuthPage;
