import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { Movie } from '../types/movie';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedHero } from '../components/FeaturedHero';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Simulated API data - In a real app, you would fetch from TMDB API
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: "Dune: Part Two",
        overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
        poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        backdrop_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        release_date: "2024-03-01",
        vote_average: 8.5,
        genre_ids: [878, 12]
      },
      {
        id: 2,
        title: "Poor Things",
        overview: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
        poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        release_date: "2023-12-07",
        vote_average: 8.1,
        genre_ids: [14, 18, 35]
      },
    ];

    setTrendingMovies(mockMovies);
    setPopularMovies(mockMovies);
    setTopRatedMovies(mockMovies);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <FeaturedHero movie={trendingMovies[0]} />
      
      <main className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-12 animate-fade-up">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Trending Now</h2>
            <Link to="/trending" className="flex items-center text-sm text-gray-400 hover:text-white">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fade-up [animation-delay:200ms]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Popular Movies</h2>
            <Link to="/popular" className="flex items-center text-sm text-gray-400 hover:text-white">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section className="animate-fade-up [animation-delay:400ms]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Top Rated</h2>
            <Link to="/top-rated" className="flex items-center text-sm text-gray-400 hover:text-white">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topRatedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}