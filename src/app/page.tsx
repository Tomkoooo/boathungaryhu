import { BoatSection } from "@/components/landing/BoatSection";
import { CarSection } from "@/components/landing/CarSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <BoatSection />
      <CarSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-slate-500 bg-slate-950 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Boathungary.hu Kft. Minden jog fenntartva.</p>
      </footer>
    </main>
  );
}
