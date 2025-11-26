"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      honeypot: formData.get("website_url"), // Hidden honeypot field
      gdpr: formData.get("gdpr") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Hiba történt a küldés során.");
      }

      setSuccess(true);
      // Reset form
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Váratlan hiba történt.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Kapcsolat</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Kérdése van? Szeretne foglalni? Írjon nekünk vagy hívjon minket bizalommal!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-6">Elérhetőségek</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Cím</p>
                    <p className="text-slate-400">1037 Budapest, Bojtár utca 56.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:info@boathungary.hu" className="text-slate-400 hover:text-blue-400 transition-colors">
                      info@boathungary.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Telefon</p>
                    <a href="tel:+36301234567" className="text-slate-400 hover:text-blue-400 transition-colors">
                      +36 30 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-4">Cégadatok</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p><span className="text-slate-300">Cégnév:</span> Boathungary.hu Kft.</p>
                <p><span className="text-slate-300">Adószám:</span> 25336363-2-41</p>
                <p><span className="text-slate-300">Cégjegyzékszám:</span> 01-09-395341</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden">
            {success ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10 p-8 text-center animate-in fade-in duration-500">
                 <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-500">
                   <CheckCircle2 className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Köszönjük!</h3>
                 <p className="text-slate-400">
                   Üzenetét sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot.
                 </p>
                 <Button 
                   variant="outline" 
                   className="mt-6 border-slate-700 text-slate-300 hover:text-white"
                   onClick={() => setSuccess(false)}
                 >
                   Új üzenet küldése
                 </Button>
               </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field - Hidden from users, visible to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url">Website</label>
                <input type="text" name="website_url" id="website_url" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Név *</label>
                  <Input id="name" name="name" required placeholder="Az Ön neve" className="bg-slate-950 border-slate-800 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email *</label>
                  <Input id="email" name="email" type="email" required placeholder="pelda@email.hu" className="bg-slate-950 border-slate-800 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Tárgy</label>
                <Input id="subject" name="subject" placeholder="Érdeklődés..." className="bg-slate-950 border-slate-800 text-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Üzenet *</label>
                <Textarea id="message" name="message" required placeholder="Írja le kérdését vagy foglalási szándékát..." className="min-h-[150px] bg-slate-950 border-slate-800 text-white" />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox id="gdpr" name="gdpr" required className="mt-1 border-slate-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="gdpr"
                    className="text-sm font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Elfogadom az adatkezelési tájékoztatót
                  </label>
                  <p className="text-xs text-slate-500">
                    Az űrlap elküldésével hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel céljából kezeljék. 
                    Az adatokat harmadik félnek nem adjuk át, és nem tároljuk bármilyen célokra.
                  </p>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Küldés folyamatban...
                  </>
                ) : (
                  "Üzenet Küldése"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
