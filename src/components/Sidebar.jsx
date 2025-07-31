'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Sidebar() {
  const location = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-gray-950 text-gray-100 shadow-lg">
      <div className="flex flex-col h-full">
        {/* Logo / Title */}
        <div className="p-6 text-2xl font-semibold border-b border-gray-700">
          Sidebar
        </div>

        {/* Navigation links */}
        <nav className="flex-1 p-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link 
                href="/" 
                className={`flex items-center gap-3 px-3 py-2 rounded transition 
                ${location === '/' 
                  ? 'text-blue-400 border-l-4 border-blue-500 bg-gray-800' 
                  : 'hover:text-blue-400'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/dashboard" 
                className={`flex items-center gap-3 px-3 py-2 rounded transition 
                ${location.startsWith('/dashboard')
                  ? 'text-blue-400 border-l-4 border-blue-500 bg-gray-800' 
                  : 'hover:text-blue-400'
                }`}
              >
                Dashboard
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
          Sidebar
        </div>
      </div>
    </aside>
  );
}
