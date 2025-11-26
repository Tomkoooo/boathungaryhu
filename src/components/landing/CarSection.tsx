import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Timer, Zap } from "lucide-react";
import Link from "next/link";

export function CarSection() {
  return (
    <section id="cars" className="py-24 bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center lg:grid-flow-col-dense">
          
          <div className="space-y-8 lg:col-start-2">
            <div>
              <Badge variant="outline" className="mb-4 text-red-400 border-red-400/30">Elektromos Autóbérlés</Badge>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Tesla Model Y Performance</h2>
              <p className="text-slate-400 text-lg">
                A sebesség és a technológia csúcsa. Bérelje ki a Tesla legnépszerűbb SUV-ját Performance kivitelben.
                Hihetetlen gyorsulás, tágas beltér.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <Timer className="w-6 h-6 mx-auto mb-2 text-red-500" />
                <p className="text-2xl font-bold text-white">3.7s</p>
                <p className="text-xs text-slate-500">0-100 km/h</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <Gauge className="w-6 h-6 mx-auto mb-2 text-red-500" />
                <p className="text-2xl font-bold text-white">250</p>
                <p className="text-xs text-slate-500">km/h Végsebesség</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <Zap className="w-6 h-6 mx-auto mb-2 text-red-500" />
                <p className="text-2xl font-bold text-white">514</p>
                <p className="text-xs text-slate-500">km Hatótáv (WLTP)</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Napi Bérleti Díj</p>
                  <p className="text-3xl font-bold text-white">45 000 Ft</p>
                </div>
                <span className="text-slate-500 mb-1">+ ÁFA / nap</span>
              </div>
            </div>

            <Link href="#contact">
            <Button className="w-full h-12 text-lg bg-red-600 hover:bg-red-700">
              Tesla Bérlés
            </Button>
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 lg:col-start-1">
             {/* Placeholder for Tesla Image */}
             <div className="w-full h-full bg-slate-950 flex items-center justify-center text-slate-500">
                <img 
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" 
                  alt="Tesla Model Y" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
