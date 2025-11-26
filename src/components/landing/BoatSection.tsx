import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Battery, Zap, Anchor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BoatSection() {
  return (
    <section id="boats" className="py-24 bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
             {/* Placeholder for Boat Image */}
             <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                <img 
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2670&auto=format&fit=crop" 
                  alt="BALT 818 TITANIUM" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
             </div>
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

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Motor</p>
                    <p className="font-semibold text-white">Kraeutler ACA8 10KW</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Battery className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Akkumulátor</p>
                    <p className="font-semibold text-white">20kWh Victron</p>
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
