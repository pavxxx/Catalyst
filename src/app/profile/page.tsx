"use client";
import Sidebar from '../../../components/sidebar';
import { useState } from "react";
import { useProfile } from '../../../components/ProfileContext';
type Profile = {
  name: string;
  email: string;
  skills: string;
  bio: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    name: "Alex Kumar",
    email: "alex@example.com",
    skills: "React, Node.js, Python",
    bio: "Passionate about full-stack web development and machine learning.",
  });

  const [editMode, setEditMode] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setEditMode(false);
    // In real app, send updated data to backend!
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 px-14 py-12 bg-blue-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-7">Profile</h1>
        <div className="bg-white rounded-xl shadow p-8 max-w-lg">
          {editMode ? (
            <form className="space-y-6" onSubmit={handleSave}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  className="border p-2 w-full rounded"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  className="border p-2 w-full rounded"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Skills</label>
                <input
                  className="border p-2 w-full rounded"
                  name="skills"
                  type="text"
                  value={profile.skills}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea
                  className="border p-2 w-full rounded"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="flex gap-3 mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Save</button>
                <button
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded"
                  type="button"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Name:</span> {profile.name}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {profile.email}
              </div>
              <div>
                <span className="font-semibold">Skills:</span> {profile.skills}
              </div>
              <div>
                <span className="font-semibold">Bio:</span> {profile.bio}
              </div>
              <button
                className="mt-4 bg-yellow-400 px-4 py-2 rounded font-semibold"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
