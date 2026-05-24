import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Mail, Heart } from "lucide-react";

export default function WeddingOpeningScreen({
  names = { man: "Afriza", woman: "Ekka" },
  recipientName = "Syaukani & Partner",
  audioSrc = "/banda-neira-sampai-jadi-debu.mp3",
  bgImage = "/abang-eza-1.jpeg",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();

  // PRELOAD AUDIO
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  // HANDLE OPEN
  const handleOpenInvitation = async () => {
    try {
      if (audioRef.current) {
        const audio = audioRef.current;

        // IMPORTANT
        audio.volume = 0;
        audio.currentTime = 0;

        await audio.play();

        // SMOOTH FADE IN
        let volume = 0;

        const fade = setInterval(() => {
          volume += 0.05;

          if (volume >= 1) {
            volume = 1;
            clearInterval(fade);
          }

          audio.volume = volume;
        }, 120);
      }

      // OPEN AFTER AUDIO SUCCESS
      setIsOpen(true);
    } catch (err) {
      console.log("Audio play failed:", err);

      // fallback tetap buka
      setIsOpen(true);
    }
  };

  // LOCK SCROLL
  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* AUDIO MUST STAY OUTSIDE ANIMATEPRESENCE */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src={audioSrc}
      />

      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.section
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 1.03,
              filter: "blur(12px)",
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="
              fixed inset-0 z-[100]
              h-[100dvh] w-full
              overflow-hidden
              bg-black
            "
          >
            {/* BACKGROUND */}
            <motion.div
              initial={{
                scale: 1.15,
                opacity: 0,
              }}
              animate={{
                scale: 1.05,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <motion.img
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                      scale: [1.05, 1.12, 1.05],
                    }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={bgImage}
                alt="Wedding Couple"
                draggable={false}
                className="
                  h-full
                  w-full
                  object-cover
                  object-[center_35%]
                "
              />
            </motion.div>

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-b
                from-black/70
                via-black/30
                to-black/80
                backdrop-blur-[2px]
              "
            />

            {/* GLOW */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    opacity: [0.2, 0.35, 0.2],
                    scale: [1, 1.08, 1],
                  }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-[-180px]
                h-[480px]
                w-[480px]
                -translate-x-1/2
                rounded-full
                bg-white/10
                blur-[120px]
              "
            />

            {/* NOISE */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full items-center justify-center px-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  w-full
                  max-w-lg
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/15
                  bg-black/45
                  p-7
                  text-center
                  shadow-[0_40px_120px_-25px_rgba(0,0,0,1)]
                  backdrop-blur-3xl
                  sm:p-10
                  md:p-12
                "
              >
                {/* AMBIENT */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.03]" />

                {/* LABEL */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                  }}
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-4 py-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.35em]
                      text-white/70
                    "
                  >
                    <Heart className="h-3 w-3 fill-white/50 text-white/50" />

                    The Wedding Of
                  </span>
                </motion.div>

                {/* NAMES */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.55,
                    duration: 1,
                  }}
                  className="mt-8"
                >
                  <h1
                    className="
                      font-serif
                      text-5xl
                      leading-[1.1]
                      tracking-[0.05em]
                      text-white
                      sm:text-6xl
                      md:text-7xl
                    "
                  >
                    {names.man}

                    <span
                      className="
                        my-3 block
                        font-light
                        text-3xl
                        text-white/40
                        md:text-4xl
                      "
                    >
                      &
                    </span>

                    {names.woman}
                  </h1>
                </motion.div>

                {/* RECIPIENT */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.9,
                  }}
                  className="mt-10"
                >
                  <div className="flex justify-center">
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        px-4 py-2
                      "
                    >
                      <Mail className="h-3.5 w-3.5 text-white/50" />

                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                        Kepada Yth.
                      </p>
                    </div>
                  </div>

                  <h2
                    className="
                      mt-5
                      text-xl
                      font-medium
                      tracking-wide
                      text-white
                      md:text-2xl
                    "
                  >
                    {recipientName}
                  </h2>
                </motion.div>

                {/* BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.1,
                    duration: 1,
                  }}
                  className="mt-12"
                >
                  <motion.button
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={handleOpenInvitation}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-full
                      bg-white
                      px-10
                      py-4
                      text-black
                      shadow-[0_10px_50px_rgba(255,255,255,0.15)]
                    "
                  >
                    <div
                      className="
                        absolute inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-black/10
                        to-transparent
                        transition-transform
                        duration-700
                        group-hover:translate-x-full
                      "
                    />

                    <span
                      className="
                        relative
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.28em]
                      "
                    >
                      Buka Undangan
                    </span>
                  </motion.button>
                </motion.div>

                {/* FOOTER */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.4,
                    duration: 1,
                  }}
                  className="
                    mt-8
                    text-[10px]
                    italic
                    leading-relaxed
                    text-white/35
                  "
                >
                  *Mohon maaf apabila ada kesalahan penulisan nama & gelar
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}