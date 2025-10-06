"use client";
import Sidebar from '../../../components/sidebar';
import { useState } from 'react';
import { useProfile } from '../../../components/ProfileContext';

type Internship = {
  id: number;
  title: string;
  company: string;
  location: string;
  tags: string[];
  match: string;
  applied: boolean;
};

export default function Internships() {
  const [internships, setInternships] = useState<Internship[]>([
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Microsoft",
      location: "Bangalore · Remote",
      tags: ["React", "TypeScript", "Node.js"],
      match: "92%",
      applied: false
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Google",
      location: "Hyderabad · Hybrid",
      tags: ["Python", "ML", "SQL"],
      match: "85%",
      applied: false
    }
  ]);

  function handleApply(id: number) {
    setInternships(internships =>
      internships.map(job =>
        job.id === id ? { ...job, applied: true } : job
      )
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 px-14 py-12 bg-blue-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-7">Internships</h1>
        <div className="space-y-8">
          {internships.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">{job.title}</h2>
                <p className="text-gray-700 text-sm">{job.company} • {job.location}</p>
                <div className="flex gap-2 my-1">
                  {job.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <span className="text-xs text-gray-400">{job.match} Match</span>
              </div>
              <div>
                {!job.applied ? (
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </button>
                ) : (
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">Applied</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
