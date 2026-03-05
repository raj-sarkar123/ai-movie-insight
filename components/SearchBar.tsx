'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Loader2, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
    const [imdbId, setImdbId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!imdbId.trim()) return;

        setIsLoading(true);
        router.push(`/movie/${imdbId.trim()}`);
    };

    return (
        <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto relative group"
        >
            {/* Subtle external glow on focus */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500" />

            <div className="relative flex items-center">
                {/* Search Icon (Left) */}
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
                    <Search className={`h-5 w-5 transition-colors duration-300 ${imdbId ? 'text-purple-400' : 'text-gray-500'}`} />
                </div>

                <input
                    type="text"
                    value={imdbId}
                    onChange={(e) => setImdbId(e.target.value)}
                    placeholder="Enter IMDb ID (e.g. tt1375666)"
                    className="block w-full pl-14 pr-32 py-5 bg-[#0b0f1a]/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-[#0b0f1a] shadow-2xl backdrop-blur-xl transition-all text-base sm:text-lg font-light tracking-wide"
                />

                {/* Right Actions Wrapper */}
                <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-2">
                  

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isLoading || !imdbId.trim()}
                        className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
                    >
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loader"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="text"
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-sm font-bold tracking-tight">Analyze</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Hint Text below input */}
            {/* <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-[11px] text-gray-500 text-center uppercase tracking-[0.2em] font-medium"
            >
                Neural Search Engine Active
            </motion.p> */}
        </motion.form>
    );
}