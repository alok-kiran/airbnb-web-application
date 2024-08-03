'use client';

import React, { useEffect, useState } from 'react'

interface ClientOnlyProps {
    children: React.ReactNode
}

function ClientOnly({
    children
}: ClientOnlyProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

  if (!mounted) return null;  
  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly
