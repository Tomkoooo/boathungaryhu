import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950 z-10" />
        {/* Placeholder for Hero Image - Replace with actual image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1563296291-14f26f7d5027?q=80&w=2787&auto=format&fit=crop")', 
            backgroundPosition: 'center' 
          }}
        />
      </div>

      <div className="container relative z-20 px-4 text-center">
        <div className="flex justify-center mb-6">
            <img 
              src="/logo.jpg" 
              alt="BoatHungary Logo" 
              className="h-64 md:h-48 w-auto rounded-lg shadow-lg border border-slate-800"
            />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-lg sm:text-xl font-bold text-blue-300 border border-blue-500/30 rounded-full bg-blue-950/30 backdrop-blur-sm">
          <Zap className="w-5 h-5" />
          <span>Elektromos megoldások szárazon és vizen</span>
        </div>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          BoatHungary<span className="text-blue-500">.hu</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-300 sm:text-xl">
          Prémium elektromos hajó és Tesla bérlés a Balatonon és Budapesten. 
          Fedezze fel a csendes luxust.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button size="lg" className="text-lg h-12 px-8 bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="#boats">
              <Anchor className="mr-2 w-5 h-5" />
              Hajóbérlés
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg h-12 px-8 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white" asChild>
            <Link href="#cars">
              Tesla Bérlés
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
