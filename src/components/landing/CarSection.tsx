import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Timer, Zap, Activity, Users, Package, Disc, Tablet } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Timer className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">3.7s</p>
                <p className="text-xs text-slate-500">0-100 km/h</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Gauge className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">250</p>
                <p className="text-xs text-slate-500">km/h Végsebesség</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Zap className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">514</p>
                <p className="text-xs text-slate-500">km Hatótáv (WLTP)</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Activity className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">AWD</p>
                <p className="text-xs text-slate-500">Dual Motor</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Users className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">5 Fő</p>
                <p className="text-xs text-slate-500">Utastér</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Package className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">2158 L</p>
                <p className="text-xs text-slate-500">Csomagtér</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Disc className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">21&quot;</p>
                <p className="text-xs text-slate-500">Überturbine</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col items-center justify-center">
                <Tablet className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-xl font-bold text-white">15&quot;</p>
                <p className="text-xs text-slate-500">Érintőkijelző</p>
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
            <Carousel className="w-full h-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="w-full h-full relative aspect-[4/3]">
                    <img 
                      src="/tesla-main.png" 
                      alt="Tesla Model Y Main" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-full relative aspect-[4/3]">
                     <img 
                      src="/tesla-side.png" 
                      alt="Tesla Model Y Side View" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}
