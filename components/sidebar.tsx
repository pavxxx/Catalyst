import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = { label: string, href: string, icon?: string };
const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Internships", href: "/internships", icon: "💼" },
  { label: "Profile", href: "/profile", icon: "🧑" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-lg p-7 flex flex-col">
      <div className="flex items-center gap-3 mb-9">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-9 h-9 rounded-lg flex justify-center items-center text-white font-bold text-lg">C</div>
        <span className="font-bold text-xl text-gray-900">Catalyst</span>
      </div>
      <nav className="flex flex-col gap-3">
        {navItems.map(item => (
          <Link href={item.href} key={item.href}>
            <span className={`flex items-center gap-3 px-4 py-2 rounded cursor-pointer ${pathname === item.href ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
              {item.icon && <span>{item.icon}</span>} {item.label}
            </span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4 bg-blue-50 rounded-md text-xs text-blue-800">
        Complete your profile for better matches!
        {/* You can make this dynamic as a user task */}
      </div>
    </aside>
  );
}
