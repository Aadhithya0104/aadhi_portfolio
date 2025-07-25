import Projects from "@/components/Projects";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Brain } from "lucide-react";
import { useState } from "react";
import { Menu } from "lucide-react";

const ProjectsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-6 left-6 z-50 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Open navigation sidebar"
        style={{ display: sidebarOpen ? 'none' : 'block' }}
      >
        <Menu size={28} />
      </button>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4 z-40 sidebar-nav animate-fade-in">
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow border border-gray-200"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation sidebar"
          >
            ×
          </button>
          <NavLink to="/" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `chatbot-3d-btn px-6 py-3 font-bold transition-colors ${isActive ? 'ring-2 ring-primary' : ''}`}>Contact</NavLink>
        </div>
      )}
      <Projects />
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

export default ProjectsPage; 