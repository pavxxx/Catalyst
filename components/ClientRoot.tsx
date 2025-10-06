"use client";
import React from "react";
import { ProfileProvider } from "./ProfileContext";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
