"use client";
import { motion } from 'framer-motion';
import { Review } from '@/types/movie';
import { User, Star, MessageSquareQuote, Quote } from 'lucide-react';

export default function ReviewList({ reviews }: { reviews: Review[] }) {
    if (reviews.length === 0) return null;

    // Framer Motion Variants for staggered entrance
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="space-y-8">
            {/* Header with stylized count */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                        <MessageSquareQuote className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                        Audience Feed
                    </h3>
                </div>
                <div className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    RECORDS: {reviews.length.toString().padStart(2, '0')}
                </div>
            </div>

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        variants={item}
                        className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 p-6 rounded-[2rem] transition-all duration-300"
                    >
                        {/* Quote Decoration */}
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-purple-500/10 transition-colors" />

                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {/* Avatar with Gradient Ring */}
                                    <div className="relative p-[1px] rounded-full bg-gradient-to-tr from-purple-500/40 to-indigo-500/40">
                                        <div className="w-10 h-10 bg-[#0b0f1a] rounded-full flex items-center justify-center border border-white/10">
                                            <User className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200 text-sm">{review.author}</h4>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">{review.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-black text-yellow-500/90">{review.rating}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <p className="text-gray-400 text-sm leading-relaxed italic group-hover:text-gray-300 transition-colors">
                                    &ldquo;{review.content}&rdquo;
                                </p>
                            </div>

                            {/* Decorative line for "entry" feel */}
                            <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500/40 to-transparent rounded-full" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}