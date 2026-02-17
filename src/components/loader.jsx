import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner3D = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050208] z-50">
      <div className="relative scale-100">
        <motion.div
          className="w-40 h-40 rounded-full border-t-4 border-l-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
          animate={{ rotateY: 360, rotateX: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-6 left-6 w-28 h-28 rounded-full border-r-4 border-b-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          animate={{ rotateZ: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute top-1 left-1 w-4 h-4 bg-white/20 rounded-full blur-sm" />
        </motion.div>

        {[16, 20].map((distance, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: index % 2 === 0 ? 4 : 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 72, 144, 216, 288].map((angle) => {
              const rotate = `rotate(${angle}deg)`;
              return (
                <motion.div
                  key={angle}
                  className={`absolute top-0 left-1/2 w-${index % 2 === 0 ? 2 : 3
                    } h-${index % 2 === 0 ? 2 : 3} -ml-1 rounded-full ${index % 2 === 0
                      ? "bg-cyan-400 shadow-lg shadow-cyan-500/50"
                      : "bg-amber-500 shadow-lg shadow-amber-500/50"
                    }`}
                  style={{ transform: `${rotate} translateY(-${distance}px)` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: angle / 360,
                  }}
                />
              );
            })}
          </motion.div>
        ))}

        <motion.div
          className="absolute top-[4.5rem] left-[4.5rem] w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner3D;
