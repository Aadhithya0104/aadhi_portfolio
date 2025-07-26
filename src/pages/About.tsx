import About from "@/components/About";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Brain } from "lucide-react";
import { useState } from "react";
import { Menu } from "lucide-react";

const AboutPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      {/* Sidebar Toggle Button */}
      <button
        className="fixed z-50 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-100 transition-colors md:top-6 md:left-6 bottom-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 w-14 h-14 md:w-auto md:h-auto"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Open navigation sidebar"
        style={{ display: sidebarOpen ? 'none' : 'block' }}
      >
        <Menu size={28} />
      </button>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed z-40 md:top-1/2 md:left-6 md:-translate-y-1/2 md:flex-col md:gap-4 md:bg-transparent flex flex-row gap-2 bottom-0 left-0 w-full justify-center bg-white/95 backdrop-blur-sm py-4 animate-fade-in">
          <button
            className="absolute md:static top-2 right-4 md:-top-4 md:-right-4 bg-white rounded-full p-2 shadow border border-gray-200 hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation sidebar"
          >
            ×
          </button>
          <NavLink to="/" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>Contact</NavLink>
        </div>
      )}
      <About />
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="chatbot-3d-btn rounded-full p-0 w-16 h-16 flex items-center justify-center shadow-lg" aria-label="Chatbot">
              <Brain size={32} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="text-lg font-semibold text-center">The chatbot is training and will be coming soon.</div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AboutPage; 