import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn(
        'group relative overflow-hidden rounded-lg transition-transform hover:scale-105',
        className
      )}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex h-full flex-col items-center justify-center p-4">
          <Play className="mb-2 h-12 w-12 text-white" />
          <h3 className="text-center text-lg font-bold text-white">{movie.title}</h3>
          <p className="mt-1 text-sm text-gray-300">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
}