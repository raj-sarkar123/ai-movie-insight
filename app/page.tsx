import SearchBar from "@/components/SearchBar";
import { Film, Sparkles,Zap, Shield } from "lucide-react";


export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden bg-[#03050c]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse [animation-delay:2s]" />
        
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        
        {/* Animated Header Badge */}
        {/* <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 hover:border-purple-500/50 transition-colors duration-500 group">
          
            
          </div>
        </div> */}

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="relative inline-block">
             <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1] text-white">
              AI Movie <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-500 italic px-2">
                Insights
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400/80 max-w-2xl mx-auto leading-relaxed font-light">
            Stop scrolling through endless reviews. Enter an <span className="text-white font-medium">IMDb ID</span> and let our AI distill thousands of sentiments into actionable clarity.
          </p>
        </div>

        {/* Search Container with "Glow" effect */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#0b0f1a]/80 backdrop-blur-2xl rounded-[1.8rem] p-2 sm:p-3 border border-white/10 shadow-2xl">
            <SearchBar />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
          <FeatureCard 
            icon={<Sparkles className="w-4 h-4 text-purple-400" />} 
            label="Sentiment Analysis" 
          />
          <FeatureCard 
            icon={<Zap className="w-4 h-4 text-indigo-400" />} 
            label="Real-time Processing" 
          />
          <FeatureCard 
            icon={<Film className="w-4 h-4 text-pink-400" />} 
            label="Deep Metadata" 
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-4 bg-white/[0.03] rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] transition-all cursor-default group">
      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
  );
}