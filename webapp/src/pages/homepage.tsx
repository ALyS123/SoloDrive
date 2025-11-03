import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import CTASection from "../components/CTASection";
import SiteFooter from "../components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureGrid />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
