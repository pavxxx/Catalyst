// app/projects/page.tsx

"use client";

import { useState } from 'react';

const initialProjects = [
  { id: 1, title: "E-commerce Website", status: "Completed", grade: "A" },
  { id: 2, title: "AI Chatbot", status: "In Review", grade: "-" },
  { id: 3, title: "Mobile App Design", status: "Completed", grade: "B+" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Submit New Project
        </button>
      </div>
      <div className="space-y-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg text-gray-800">{project.title}</h2>
              <p className={`text-sm font-medium ${
                project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                Status: {project.status}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Grade</p>
              <p className="font-bold text-lg text-indigo-600">{project.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}