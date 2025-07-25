import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex gap-4 justify-center pt-8 pb-4">
        <NavLink to="/about" className={({ isActive }) => `px-6 py-2 rounded-full font-bold transition-colors ${isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-primary/10 hover:text-primary'}`}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `px-6 py-2 rounded-full font-bold transition-colors ${isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-primary/10 hover:text-primary'}`}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `px-6 py-2 rounded-full font-bold transition-colors ${isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-primary/10 hover:text-primary'}`}>Contact</NavLink>
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
