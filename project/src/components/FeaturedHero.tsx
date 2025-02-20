import { Play, Plus } from 'lucide-react';
import { Movie } from '../types/movie';

interface FeaturedHeroProps {
  movie?: Movie;
}

export function FeaturedHero({ movie }: FeaturedHeroProps) {
  if (!movie) return null;

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="animate-fade-up text-4xl font-bold text-white md:text-6xl">
            {movie.title}
          </h1>
          <p className="animate-fade-up mt-4 max-w-xl text-lg text-gray-300 [animation-delay:200ms]">
            {movie.overview}
          </p>
          <div className="animate-fade-up mt-8 flex gap-4 [animation-delay:400ms]">
            <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
              <Play className="h-5 w-5" /> Play Now
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
              <Plus className="h-5 w-5" /> Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}