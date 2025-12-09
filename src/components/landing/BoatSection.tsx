import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Battery, Zap, Anchor, ArrowLeftRight, Maximize2, Scale, Users, Bed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export function BoatSection() {
  return (
    <section id="boats" className="py-24 bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <Carousel className="w-full h-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="w-full h-full relative aspect-[4/3]">
                    <img 
                      src="/boat-main.jpg" 
                      alt="BALT 818 TITANIUM Main" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="w-full h-full relative aspect-[4/3]">
                     <img 
                      src="/boat-side.png" 
                      alt="BALT 818 TITANIUM Side View" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
                 <CarouselItem>
                  <div className="w-full h-full relative aspect-[4/3]">
                     <img 
                      src="/boat-interior.png" 
                      alt="BALT 818 TITANIUM Interior" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">Prémium Hajóbérlés</Badge>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">BALT 818 TITANIUM</h2>
              <p className="text-slate-400 text-lg">
                Félig sikló elektromos lakóhajó, amely tökéletes kényelmet biztosít a vízen. 
                Csendes, környezetbarát és stílusos.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Motor</p>
                    <p className="font-semibold text-white text-sm">10kW</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Battery className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Akkumulátor</p>
                    <p className="font-semibold text-white text-sm">20kWh</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <ArrowLeftRight className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Hossz</p>
                    <p className="font-semibold text-white text-sm">8.48m</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Szélesség</p>
                    <p className="font-semibold text-white text-sm">2.7m</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Merülés</p>
                    <p className="font-semibold text-white text-sm">0.4-0.6m</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Súly</p>
                    <p className="font-semibold text-white text-sm">1850kg</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Férőhely</p>
                    <p className="font-semibold text-white text-sm">6 Fő</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Fekhely</p>
                    <p className="font-semibold text-white text-sm">6</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Árak</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Bérlés (Kapitánnyal)</p>
                  <p className="text-2xl font-bold text-white">30 000 Ft<span className="text-sm font-normal text-slate-500"> + ÁFA / óra</span></p>
                  <p className="text-2xl font-bold text-white mt-2">200 000 Ft<span className="text-sm font-normal text-slate-500"> + ÁFA / nap</span></p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400 mb-1">Eladási Ár</p>
                  <p className="text-2xl font-bold text-blue-400">130 000 €<span className="text-sm font-normal text-slate-500"> + ÁFA</span></p>
                  <p className="text-xs text-slate-500 mt-2">Teljes felszereltséggel</p>
                </div>
              </div>
            </div>
            <Link href="#contact">
            <Button className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
              Ajánlatkérés
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
