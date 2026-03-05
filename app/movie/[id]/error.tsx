'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, RefreshCw, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="relative min-h-screen bg-[#03050c] flex flex-col items-center justify-center p-6 overflow-hidden">
            
            {/* Background Aesthetic (Sync with Home) */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-600/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative max-w-md w-full"
            >
                {/* Decorative Glow Ring */}
                <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-[2.5rem] blur-xl" />

                <div className="relative bg-[#0b0f1a]/80 border border-white/10 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] text-center shadow-2xl">
                    
                    {/* Error Icon with Pulsing Effect */}
                    <div className="relative w-20 h-20 mx-auto mb-8">
                        <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-lg animate-pulse" />
                        <div className="relative z-10 w-full h-full bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/30">
                            <ShieldAlert className="w-10 h-10 text-red-400" />
                        </div>
                    </div>

                    <div className="space-y-3 mb-10">
                        <h2 className="text-3xl font-black text-white tracking-tighter italic">
                            Analysis <span className="text-red-500">Failed</span>
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            The neural link to IMDb was interrupted. Please verify the ID <code className="text-red-400/80 bg-red-400/10 px-1.5 py-0.5 rounded font-mono text-sm">ttxxxxxxx</code> and try again.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => reset()}
                            className="group flex items-center justify-center gap-2 py-4 bg-white text-black rounded-2xl font-bold transition-all shadow-lg shadow-white/5"
                        >
                            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                            Retry Connection
                        </motion.button>

                        <Link href="/" className="group flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 text-gray-300 rounded-2xl font-medium transition-all border border-white/10">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Terminal
                        </Link>
                    </div>

                    {/* Subtle Error Digest */}
                    {error.digest && (
                        <p className="mt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                            Err_Digest: {error.digest}
                        </p>
                    )}
                </div>
            </motion.div>
        </main>
    );
}