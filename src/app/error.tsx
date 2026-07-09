"use client";

import { useEffect } from "react";
import Button from "@/components/shared/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="max-w-[480px] text-text-muted">An unexpected error occurred. Please try again.</p>
      <Button variant="primary" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
