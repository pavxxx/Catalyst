"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Profile = {
  name: string;
  email: string;
  skills: string;
  bio: string;
};

type ProfileContextType = {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("useProfile must be used within ProfileProvider");
  return context;
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>({
    name: "Alex Kumar",
    email: "alex@example.com",
    skills: "React, Node.js, Python",
    bio: "Passionate about full-stack web development and machine learning.",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}