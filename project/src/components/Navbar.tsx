import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          StreamFlix
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search movies..."
              className="w-64 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/20"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <Link to="/movies" className="hover:text-white">
              Movies
            </Link>
            <Link to="/tv-shows" className="hover:text-white">
              TV Shows
            </Link>
            <Link to="/my-list" className="hover:text-white">
              My List
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}