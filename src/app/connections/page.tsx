// app/connections/page.tsx

"use client";

import { useState } from 'react';

const initialConnections = [
  { id: 1, name: "Dr. Alan Grant", role: "Faculty", department: "Computer Science", connected: true },
  { id: 2, name: "Jane Smith", role: "Student", department: "Data Science", connected: false },
  { id: 3, name: "John Doe", role: "Student", department: "Computer Science", connected: true },
  { id: 4, name: "Dr. Ellie Sattler", role: "Faculty", department: "Cybersecurity", connected: false },
];

export default function ConnectionsPage() {
  const [connections, setConnections] = useState(initialConnections);

  const handleConnect = (id: number) => {
    setConnections(prev =>
      prev.map(c => (c.id === id ? { ...c, connected: !c.connected } : c))
    );
  };

  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Connections</h1>
      <div className="bg-white rounded-xl shadow-md">
        <ul className="divide-y divide-gray-200">
          {connections.map(conn => (
            <li key={conn.id} className="p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/48?u=${conn.id}`}
                  alt={conn.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-lg text-gray-800">{conn.name}</h2>
                  <p className="text-gray-600 text-sm">{conn.role} • {conn.department}</p>
                </div>
              </div>
              <button
                onClick={() => handleConnect(conn.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  conn.connected
                    ? "bg-gray-200 text-gray-800"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {conn.connected ? "Connected" : "Connect"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}