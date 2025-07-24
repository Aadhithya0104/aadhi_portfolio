import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

// EnvelopeAnimation: closed envelope (Mail icon), opens on click, letter appears inside envelope with notebook lines, contact info pops up below
const EnvelopeAnimation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[320px] py-6 relative">
      {/* Envelope cover */}
      <div
        className={`relative w-80 h-80 cursor-pointer transition-transform duration-500 ${open ? "scale-95" : "hover:scale-105"}`}
        onClick={() => setOpen(true)}
        aria-label="Open envelope"
        style={{ minWidth: 320, minHeight: 320 }}
      >
        {/* Envelope base */}
        <div className="absolute inset-0 bg-white border-4 border-gray-300 rounded-2xl z-10 flex flex-col items-center justify-between overflow-hidden p-6">
          {/* Letter content appears inside envelope when open */}
          {open && (
            <div className="flex flex-col justify-between h-full w-full relative">
              {/* Notebook lines background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full h-[1.7rem] border-b border-gray-200" />
                ))}
              </div>
              <div className="flex-1 flex flex-col justify-center items-center z-10 px-2">
                <div className="font-bold text-primary text-center mb-4 text-2xl leading-tight bg-transparent">Ready to elevate your product’s user experience?</div>
                <div className="text-lg text-gray-700 text-center mb-6 leading-snug max-w-full bg-transparent">
                  I specialize in creating clean, functional, and user-first designs that drive engagement and delight users. Whether you need a new app UI, website redesign, or a complete design system.
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Envelope flap */}
        <div
          className={`absolute left-0 top-0 w-full h-2/5 bg-gray-200 border-x-2 border-t-2 border-gray-300 rounded-t-2xl z-20 transition-transform duration-500 origin-top ${open ? "-rotate-x-75 opacity-0" : "rotate-x-0 opacity-100"}`}
          style={{ transformOrigin: "top center" }}
        />
        {/* Mail icon overlay when closed */}
        {!open && (
          <Mail className="absolute left-1/2 top-1/2 w-12 h-12 text-primary -translate-x-1/2 -translate-y-1/2 z-30 transition-opacity duration-500" />
        )}
      </div>
      {/* Contact info popup below envelope */}
      {open && (
        <div className="mt-4 px-6 py-4 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col items-center gap-3 z-50 animate-fade-in">
          <a href="mailto:aadhithyaviswanathan@gmail.com" className="flex items-center gap-2 text-primary hover:underline text-base break-all">
            <Mail className="w-5 h-5" /> aadhithyaviswanathan@gmail.com
          </a>
          <a href="https://wa.me/8072660284" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:underline text-base">
            <MessageCircle className="w-5 h-5" /> WhatsApp: 8072660284
          </a>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </div>
  );
};

export default EnvelopeAnimation; 