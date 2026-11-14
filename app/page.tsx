import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
    </main>
  );
}