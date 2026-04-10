"use client";

import { ThemeProvider as ThemeProviderInner } from "@/components/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProviderInner>{children}</ThemeProviderInner>;
}
