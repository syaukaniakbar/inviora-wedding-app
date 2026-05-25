import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Mail, Heart } from "lucide-react";

export default function WeddingOpeningScreen({
  names = { man: "Afriza", woman: "Ekka" },
  recipientName = "Tamu Undangan",
  audioSrc = "/david-bayu-cincin-janji-hati-official.mp3",
  bgImage = "/abang-eza-1.jpeg",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();

  // MOBILE DETECTION
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;

    return window.innerWidth < 768;
  }, []);

  // GET RECIPIENT FROM URL
  const recipient = useMemo(() => {
    if (typeof window === "undefined") return recipientName;

    const params = new URLSearchParams(window.location.search);

    const to = params.get("to");

    if (!to) return recipientName;

    return decodeURIComponent(to.replace(/\+/g, " "));
  }, [recipientName]);

  // DISABLE HEAVY MOTION
  const disableHeavyMotion = shouldReduceMotion || isMobile;

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

        audio.volume = 0;
        audio.currentTime = 0;

        await audio.play();

        // SMOOTH AUDIO FADE
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

      setIsOpen(true);
    } catch (err) {
      console.log("Audio play failed:", err);

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
      {/* AUDIO */}
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
              scale: 1.01,
              transition: {
                duration: 0.8,
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
                scale: 1.04,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute inset-0
                transform-gpu
                will-change-transform
              "
            >
              <motion.img
                animate={
                  disableHeavyMotion
                    ? {}
                    : {
                      y: [-8, 8, -8],
                    }
                }
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={bgImage}
                alt="Wedding Couple"
                draggable={false}
                className="
                  h-full
                  w-full
                  scale-[1.03]
                  object-cover
                  object-[center_35%]
                  select-none
                  transform-gpu
                  will-change-transform
                "
              />
            </motion.div>

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-b
                from-black/70
                via-black/35
                to-black/85
              "
            />

            {/* AMBIENT LIGHT */}
            <motion.div
              animate={
                disableHeavyMotion
                  ? {}
                  : {
                    opacity: [0.14, 0.22, 0.14],
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
                h-[420px]
                w-[420px]
                -translate-x-1/2
                rounded-full
                bg-white/10
                blur-[60px]
                transform-gpu
              "
            />

            {/* NOISE */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full items-center justify-center px-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  w-full
                  max-w-lg
                  overflow-hidden
                  rounded-[34px]
                  border border-white/10
                  bg-black/40
                  p-7
                  text-center
                  shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                  backdrop-blur-xl
                  sm:p-10
                  md:p-12
                "
              >
                {/* CARD AMBIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/[0.08]
                    via-transparent
                    to-white/[0.02]
                  "
                />

                {/* LABEL */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.7,
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
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.9,
                  }}
                  className="mt-8"
                >
                  <h1
                    className="
                      font-serif
                      text-5xl
                      leading-[1.1]
                      tracking-[0.04em]
                      text-white
                      sm:text-6xl
                      md:text-7xl
                    "
                  >
                    {names.man}

                    <span
                      className="
                        my-3 block
                        text-3xl
                        font-light
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.75,
                    duration: 0.8,
                  }}
                  className="mt-10"
                >
                  <div className="flex justify-center">
                    <div
                      className="
                        flex items-center gap-2
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        px-4 py-2
                      "
                    >
                      <Mail className="h-3.5 w-3.5 text-white/50" />

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.28em]
                          text-white/50
                        "
                      >
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
                    {recipient}
                  </h2>
                </motion.div>

                {/* BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.95,
                    duration: 0.9,
                  }}
                  className="mt-12"
                >
                  <motion.button
                    whileHover={{
                      y: -2,
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
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
                      shadow-lg
                    "
                  >
                    {/* SHINE */}
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
                    delay: 1.2,
                    duration: 0.9,
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