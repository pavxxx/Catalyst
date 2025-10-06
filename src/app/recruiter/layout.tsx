// PASTE THIS ENTIRE CODE INTO: src/app/recruiter/layout.tsx

import React from 'react';

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* Sidebar - Adapted for Recruiters */}
      <aside className="w-64 bg-white p-6 flex flex-col border-r shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg w-10 h-10 flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-xl text-gray-800">Catalyst</span>
        </div>
        
        <nav className="flex-1 space-y-3">
          <a href="/recruiter/dashboard" className="flex items-center gap-3 text-blue-600 bg-blue-50 p-3 rounded-lg font-medium">
            <span>📊</span> Dashboard
          </a>
          <a href="/recruiter/post-internships" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>➕</span> Post Internships
          </a>
          <a href="/recruiter/applicant-management" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>📂</span> Applicant Management
          </a>
          <a href="/recruiter/student-database" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>🔍</span> Student Database
          </a>
          <a href="/recruiter/reports-analytics" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>📈</span> Reports/Analytics
          </a>
          <a href="/recruiter/settings" className="flex items-center gap-3 text-gray-700 p-3 rounded-lg hover:bg-gray-50 font-medium">
            <span>⚙️</span> Settings
          </a>
        </nav>
        
        <div className="mt-6">
          {/* Optional: Add a recruiter-specific promo block here later */}
        </div>
      </aside>

      {/* This is where your page content will be injected */}
      <main className="flex-1 p-8">
        {children}
      </main>
      
    </div>
  );
}