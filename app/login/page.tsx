'use client';

import { Suspense } from 'react';
import LoginSection from '@/components/loginSection/LoginSection';

export default function Login() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <LoginSection />
    </Suspense>
  );
}