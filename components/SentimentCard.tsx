"use client";
import { motion } from 'framer-motion';
import { SentimentAnalysis } from '@/types/movie';
import { Sparkles, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';

export default function SentimentCard({ sentimentInsight }: { sentimentInsight: SentimentAnalysis }) {
    const { summary, sentiment } = sentimentInsight;

    const sentimentStyles = {
        Positive: "bg-green-500/10 border-green-500/20 text-green-400",
        Negative: "bg-red-500/10 border-red-500/20 text-red-400",
        Mixed: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    };

    const sentimentIcons = {
        Positive: <ThumbsUp className="w-5 h-5 mr-2" />,
        Negative: <ThumbsDown className="w-5 h-5 mr-2" />,
        Mixed: <Minus className="w-5 h-5 mr-2" />,
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                        <Sparkles className="w-6 h-6 mr-3 text-indigo-400" /> AI Insight
                    </h3>
                    <div className={`flex items-center px-4 py-2 rounded-xl border font-bold ${sentimentStyles[sentiment]} self-start sm:self-auto`}>
                        {sentimentIcons[sentiment]}
                        {sentiment}
                    </div>
                </div>

                <p className="text-lg text-indigo-100/90 leading-relaxed font-medium">
                    {summary}
                </p>
            </div>
        </motion.div>
    );
}
