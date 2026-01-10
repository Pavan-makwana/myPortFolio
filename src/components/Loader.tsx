import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setPercentage(100);
        clearInterval(timer);
        setTimeout(() => {
          onComplete?.();
        }, 300);
      } else {
        setPercentage(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="relative">
        {/* Rotating ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-transparent border-t-[var(--accent)] border-r-[var(--primary)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
            <motion.span
              className="text-3xl font-bold text-white"
              key={percentage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {percentage}%
            </motion.span>
          </div>
        </div>

        {/* Pulsing outer glow */}
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)]/30 to-[var(--accent)]/30 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional glow effect */}
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full bg-[var(--accent)]/20 blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 text-white/70 text-sm tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}