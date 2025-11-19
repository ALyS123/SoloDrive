import type { ReactNode } from "react";
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HomePageBody from "../components/Body";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <SiteHeader />
      <main className="flex-1">{children}
        <HomePageBody />
      </main>
      <SiteFooter />
    </div>
  );
}
