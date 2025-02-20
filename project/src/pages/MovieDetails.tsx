import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetails as MovieDetailsType } from '../types/movie';
import { Play, Plus, Star } from 'lucide-react';

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);

  useEffect(() => {
    // Mock movie details data
    setMovie({
      id: 1,
      title: "Dune: Part Two",
      overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      backdrop_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      release_date: "2024-03-01",
      vote_average: 8.5,
      genre_ids: [878, 12],
      runtime: 166,
      genres: [
        { id: 878, name: "Science Fiction" },
        { id: 12, name: "Adventure" }
      ],
      status: "Released"
    });
  }, [id]);

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="animate-fade-right w-64 flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="animate-fade-up flex-1">
            <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
            
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-500" />
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {movie.overview}
            </p>

            <div className="mt-8 flex gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
                <Play className="h-5 w-5" /> Watch Now
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
                <Plus className="h-5 w-5" /> Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}