import HeroBackgroundEffects from "./HeroBackgroundEffects";
import HeroContent from "./HeroContent";
import HeroLabels from "./HeroLabels";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroBackgroundEffects />
      <HeroContent />
      <HeroLabels />
    </section>
  );
}