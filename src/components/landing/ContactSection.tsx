"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Kapcsolat</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Kérdése van? Szeretne foglalni? Írjon nekünk vagy hívjon minket bizalommal!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-blue-500/10 text-blue-400">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg mb-1">Cím</p>
                    <p className="text-slate-400">1025 Budapest,<br />Csatárka út 42-50. 2. ép. 7.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-blue-500/10 text-blue-400">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg mb-1">Email</p>
                    <a href="mailto:info@boathungary.hu" className="text-slate-400 hover:text-blue-400 transition-colors">
                      info@boathungary.hu
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-blue-500/10 text-blue-400">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg mb-1">Telefon</p>
                    <a href="tel:+36703897985" className="text-slate-400 hover:text-blue-400 transition-colors">
                      +36 70 389 7985
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cégadatok</h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400">
                <p><span className="text-slate-300">Cégnév:</span> Boathungary.hu Kft.</p>
                <p><span className="text-slate-300">Adószám:</span> 25336363-2-41</p>
                <p><span className="text-slate-300">Cégjegyzékszám:</span> 01-09-395341</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
