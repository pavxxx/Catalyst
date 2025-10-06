// app/settings/page.tsx

"use client";

import { useState } from 'react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
        {/* Account Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-4">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" defaultValue="Siddhant Som" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" defaultValue="siddhant.som@example.com" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-4">Notifications</h2>
          <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-500">Get emails about new internships and messages.</p>
              </div>
              <button
                onClick={() => handleToggle('email')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.email ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`}/>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Push Notifications</h3>
                <p className="text-sm text-gray-500">Get push notifications on your mobile device.</p>
              </div>
              <button
                onClick={() => handleToggle('push')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications.push ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`}/>
              </button>
            </div>
          </div>
        </section>

        <div className="mt-8 border-t pt-6 flex justify-end">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
}