import { Loader2 ,Sparkles} from 'lucide-react';

export default function Loading() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#03050c]">
      
      {/* Background Consistency (Matches Home) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        
        {/* The "Scanner" Visual */}
        <div className="relative mb-10">
          {/* Multi-layered Glow */}
          <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-110" />
          
          {/* Main Icon with double-spin effect */}
          <div className="relative z-10 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin transition-all duration-1000" />
            <Sparkles className="w-5 h-5 text-indigo-300 absolute top-4 right-4 animate-bounce" />
          </div>
        </div>

        {/* Textual Feedback */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white italic">
            Analyzing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Sentiment</span>
          </h2>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-400 font-medium flex items-center gap-2">
              Deep-scanning audience reviews...
            </p>
            
            {/* Minimal Progress Bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-full origin-left animate-[loading-bar_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Subtle Tips */}
        <div className="mt-12 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
          Processing IMDb Metadata v2.0
        </div>
      </div>
    </main>
  );
}