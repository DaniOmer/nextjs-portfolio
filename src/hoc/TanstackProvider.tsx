"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { tanstackClientProvider } from "@/lib/tanstack";

export const TanstackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={tanstackClientProvider}>
      {children}
    </QueryClientProvider>
  );
};
