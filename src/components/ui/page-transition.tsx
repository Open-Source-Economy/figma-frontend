import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface PageTransitionProps {
  isLoading: boolean;
}

/**
 * PageTransition - Smooth loading transition between page navigations
 * 
 * Features:
 * - Elegant fade animation
 * - Brand-colored spinner
 * - Non-blocking overlay
 * - Smooth entrance and exit
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-accent to-brand-highlight blur-xl opacity-40 animate-pulse" />
              
              {/* Spinner */}
              <Loader2 className="relative w-12 h-12 text-brand-accent animate-spin" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
