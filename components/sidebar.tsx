// components/sidebar.tsx

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// An array to hold the navigation links for easy mapping
const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: '/internships', label: 'Internships', icon: '💼' },
  { href: '/profile', label: 'Profile & Skills', icon: '👤' },
  { href: '/projects', label: 'Projects', icon: '📁' },
  { href: '/achievements', label: 'Achievements', icon: '🏆' },
  { href: '/connections', label: 'Connections', icon: '👥' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-indigo-600 mb-8 ml-2">Catalyst</h1>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 my-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-indigo-100'
                  }`}
                >
                  {/* FIX: Add this span to render the icon */}
                  <span className="mr-3 text-xl">{item.icon}</span>
                  
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Profile Section */}
      <div className="border-t pt-4">
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <img
            src="https://i.pravatar.cc/40" // Placeholder image
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">Siddhant Som</p>
            <p className="text-xs text-gray-500">Computer Science</p>
          </div>
        </div>
      </div>
    </aside>
  );
}