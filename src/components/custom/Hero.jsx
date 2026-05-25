import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const WEDDING_DATE = new Date("2026-06-06T14:00:00+08:00");

const calculateTimeLeft = () => {
  const difference = WEDDING_DATE - new Date();

  return {
    days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
    seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center rounded-[28px] border border-white/50 bg-white/50 px-4 py-8 backdrop-blur-xl"
        >
          <motion.span
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-serif text-5xl font-light text-neutral-900 md:text-7xl"
          >
            {String(item.value).padStart(2, "0")}
          </motion.span>
          <span className="mt-4 text-[11px] uppercase tracking-[0.3em] text-neutral-400">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f6f1ea]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,199,176,0.38),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.8),transparent_40%)]" />

        {/* Soft Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#d9c7b0]/60
            blur-[120px]
          "
        />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 md:px-12 lg:px-20">
        {/* HERO HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* TOP LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-black/5
              bg-white/60
              px-5 py-2
              shadow-sm
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-neutral-500" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
              Wedding Invitation
            </p>
          </motion.div>

          {/* HERO TITLE */}
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
              delay: 0.15,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10"
          >
            <h1
              className="
                font-serif
                text-5xl
                font-light
                leading-[1.1]
                tracking-tight
                text-neutral-900
                sm:text-6xl
                md:text-8xl
              "
            >
              A Celebration
              <span className="block italic text-neutral-400">
                of Love
              </span>
            </h1>
          </motion.div>

          {/* DATE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 1,
            }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="h-px w-10 bg-neutral-300 md:w-16" />

            <div
              className="
                rounded-full
                border border-black/5
                bg-white/70
                px-5 py-2
                shadow-sm
                backdrop-blur-xl
              "
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-600 md:text-[11px]">
                06 • 06 • 2026
              </p>
            </div>

            <div className="h-px w-10 bg-neutral-300 md:w-16" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-sm
              leading-[2]
              text-neutral-600
              md:text-base
            "
          >
            Dengan penuh rasa syukur dan kebahagiaan, kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam momen sakral perjalanan
            cinta kami. Sebuah hari yang dipenuhi doa, kasih, dan harapan
            untuk memulai kehidupan baru bersama.
          </motion.p>
        </motion.div>

        {/* MAIN SECTION */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-28">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[48px] bg-white/40 blur-3xl" />

            {/* Floating Heart */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    y: [-8, 12, -8],
                  }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-5
                -top-5
                z-20
                rounded-full
                border border-white/40
                bg-white/70
                p-4
                shadow-xl
                backdrop-blur-xl
              "
            >
              <Heart className="h-5 w-5 fill-neutral-800 text-neutral-800" />
            </motion.div>

            {/* Image Card */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border border-white/40
                bg-white/50
                shadow-[0_30px_90px_-20px_rgba(0,0,0,0.2)]
                backdrop-blur-xl
              "
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                        scale: [1, 1.04, 1],
                      }
                  }
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/abang-eza-2.jpeg"
                  alt="Wedding Couple"
                  draggable={false}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* COUPLE INFO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* GROOM */}
            <div className="text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.45em] text-neutral-400">
                The Groom
              </span>

              <h2
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-light
                  leading-tight
                  text-neutral-900
                  md:text-6xl
                "
              >
                Muhammad Afriza Nadil
              </h2>

              <div className="mt-7 h-px w-20 bg-neutral-300 lg:mx-0 mx-auto" />

              <p className="mt-7 max-w-xl text-sm leading-[2] text-neutral-600 md:text-base">
                Putra dari pasangan
                <span className="font-medium text-neutral-800">
                  {" "}
                  Bapak Dr. Ir. Iskandar, M.P. (Alm)
                </span>{" "}
                dan
                <span className="font-medium text-neutral-800">
                  {" "}
                  Ibu Ainun Jariyah
                </span>
              </p>
            </div>

            {/* DIVIDER */}
            <div className="my-14 flex items-center gap-6">
              <div className="h-px flex-1 bg-neutral-200" />

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border border-black/5
                  bg-white/70
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                <Heart className="h-5 w-5 fill-neutral-800 text-neutral-800" />
              </div>

              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* BRIDE */}
            <div className="text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.45em] text-neutral-400">
                The Bride
              </span>

              <h2
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-light
                  leading-tight
                  text-neutral-900
                  md:text-6xl
                "
              >
                Ekka Yastiana
              </h2>

              <div className="mt-7 h-px w-20 bg-neutral-300 lg:mx-0 mx-auto" />

              <p className="mt-7 max-w-xl text-sm leading-[2] text-neutral-600 md:text-base">
                Putri dari pasangan
                <span className="font-medium text-neutral-800">
                  {" "}
                  Bapak Yasmin Mandagi (Alm)
                </span>{" "}
                dan
                <span className="font-medium text-neutral-800">
                  {" "}
                  Ibu Markati
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-28
            overflow-hidden
            rounded-[36px]
            border border-white/50
            bg-white/60
            px-6
            py-14
            shadow-[0_20px_80px_-30px_rgba(0,0,0,0.2)]
            backdrop-blur-2xl
            sm:px-10
          "
        >
          {/* Ambient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#d9c7b0]/20" />

          <div className="relative">
            <p className="text-center text-[11px] uppercase tracking-[0.45em] text-neutral-500">
              Counting The Days
            </p>

            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;