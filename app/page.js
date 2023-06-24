import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      {/* <navBar/> */}
      <NavBar />
      {/* <hero/> */}
      <HeroSection />
      {/* <project section/> */}
      <ProjectSection />
      {/* <contact section/> */}
      <ContactSection />
    </main>
  );
}
