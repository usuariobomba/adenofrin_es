import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const NAMES = [
  "Carlos M****",
  "Juan P****",
  "Andrés G****",
  "Luis R****",
  "Jorge S****",
  "Diego T****",
  "Manuel V****",
  "Javier L****",
  "Gabriel C****",
  "Fernando H****"
];

const SocialProofPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const showNotification = () => {
      // Pick random name
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      setCurrentName(randomName);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
        
        // Schedule next show between 5 and 10 seconds
        const nextDelay = Math.random() * (10000 - 5000) + 5000;
        timeoutId = setTimeout(showNotification, nextDelay);
      }, 4000);
    };

    // Initial start delay
    timeoutId = setTimeout(showNotification, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur shadow-lg border-l-4 border-orange-500 rounded-r-lg p-3 pr-5 flex items-center gap-3 max-w-[300px]">
        <div className="bg-green-100 p-2 rounded-full shrink-0">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Nuevo Pedido</p>
          <p className="text-sm font-bold text-slate-800">
            {currentName}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">Hace instantes</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;