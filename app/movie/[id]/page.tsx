import { Suspense } from 'react';
import { fetchMovie } from '@/lib/omdb';
import { simulateReviews } from '@/services/reviewService';
import { analyzeSentiment } from '@/lib/sentiment';
import MovieCard from '@/components/MovieCard';
import SentimentCard from '@/components/SentimentCard';
import ReviewList from '@/components/ReviewList';
import Link from 'next/link';
import { ArrowLeft, RefreshCcw, LayoutDashboard, BrainCircuit } from 'lucide-react';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getMovieInsights(id: string) {
    const movie = await fetchMovie(id);
    if (!movie) return null;

    const reviews = simulateReviews(id);
    const sentimentInsight = analyzeSentiment(reviews);

    return { movie, reviews, sentimentInsight };
}

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const data = await getMovieInsights(resolvedParams.id);

    if (!data) {
        notFound();
    }

    const { movie, reviews, sentimentInsight } = data;

    return (
        <main className="relative min-h-screen bg-[#03050c] text-gray-100 py-8 px-4 md:px-8 overflow-x-hidden">
            
            {/* Background Aesthetic (Sync with Home) */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[50%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-8 relative z-10">
                
                {/* Enhanced Navigation Bar */}
                <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] border border-white/10 backdrop-blur-md p-3 rounded-2xl">
                    <Link 
                        href="/" 
                        className="group inline-flex items-center text-gray-400 hover:text-white transition-all px-4 py-2 rounded-xl hover:bg-white/5 w-full sm:w-auto justify-center"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
                        <span className="text-sm font-medium">Back to Analysis</span>
                    </Link>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                            <BrainCircuit className="w-4 h-4" />
                            AI Sentiment Model
                        </div>
                        <div className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                            <RefreshCcw className="w-3 h-3 animate-spin-slow" />
                            Live Data
                        </div>
                    </div>
                </nav>

                {/* Main Content Layout */}
                <div className="space-y-8">
                    
                    {/* Hero Movie Section */}
                    <section className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative">
                            <MovieCard movie={movie} />
                        </div>
                    </section>

                    {/* Insights Bento Grid */}
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Sidebar: Sentiment Intelligence */}
                        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
                            <div className="flex items-center gap-2 px-2 text-gray-400">
                                <LayoutDashboard className="w-4 h-4" />
                                <h3 className="text-xs font-bold uppercase tracking-widest">Intelligence Report</h3>
                            </div>
                            <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/5">
                                <SentimentCard sentimentInsight={sentimentInsight} />
                            </div>
                        </aside>

                        {/* Main Body: Review Feed */}
                        <section className="lg:col-span-8 space-y-6">
                             <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <h3 className="text-xs font-bold uppercase tracking-widest">Audience Raw Feed</h3>
                                </div>
                                <span className="text-[10px] text-gray-500 font-mono">ID: {resolvedParams.id}</span>
                            </div>
                            
                            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-1 md:p-2 backdrop-blur-sm">
                                <ReviewList reviews={reviews} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer Tag */}
            <footer className="mt-20 py-8 text-center border-t border-white/5">
                <p className="text-gray-600 text-xs tracking-widest uppercase">
                    Neural Analysis Complete &bull; {new Date().getFullYear()}
                </p>
            </footer>
        </main>
    );
}