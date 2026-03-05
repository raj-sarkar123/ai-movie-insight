"use client";
import { motion } from 'framer-motion';
import { Movie } from '@/types/movie';
import { Star, Clock, Calendar, Film, User, Users, Clapperboard } from 'lucide-react';

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md shadow-2xl flex flex-col md:flex-row"
        >
            {/* Ambient Background Glow behind the card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-3xl" />

            {/* Poster Section */}
            <div className="md:w-1/3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#03050c] via-transparent to-transparent z-10 md:bg-gradient-to-r" />
                
                {movie.Poster && movie.Poster !== 'N/A' ? (
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        src={movie.Poster}
                        alt={`${movie.Title} Poster`}
                        className="w-full h-full object-cover aspect-[2/3] md:aspect-auto"
                    />
                ) : (
                    <div className="w-full h-full aspect-[2/3] md:aspect-auto bg-white/5 flex items-center justify-center">
                        <Film className="w-16 h-16 text-white/10" />
                    </div>
                )}
                
                {/* Rating Badge Overlay for Mobile/Tablet */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                     <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-white font-bold text-sm">{movie.imdbRating}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center relative">
                
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/5 text-white/70 text-[10px] uppercase tracking-widest font-bold rounded-lg border border-white/10">
                        {movie.Rated}
                    </span>
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] uppercase tracking-widest font-bold rounded-lg border border-indigo-500/20">
                        {movie.Genre?.split(',')[0]}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">
                    {movie.Title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8 font-medium">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        {movie.Year}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        {movie.Runtime}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clapperboard className="w-4 h-4 text-purple-400" />
                        {movie.Director}
                    </div>
                </div>

                {/* Plot Section */}
                <div className="space-y-3 mb-8">
                    <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] opacity-50">
                        Synopsis
                    </h3>
                    <p className="text-gray-300/90 leading-relaxed text-lg font-light italic">
                        "{movie.Plot}"
                    </p>
                </div>

                {/* Details Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-white/5">
                            <Users className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Starring</p>
                            <p className="text-sm text-gray-300 font-medium">{movie.Actors}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-white/5">
                            <User className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Director</p>
                            <p className="text-sm text-gray-300 font-medium">{movie.Director}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}