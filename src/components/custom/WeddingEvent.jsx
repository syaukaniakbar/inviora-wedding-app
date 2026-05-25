import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Sparkles,
  Heart,
} from "lucide-react";

export default function WeddingEvent() {
  const shouldReduceMotion = useReducedMotion();

  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Pernikahan+Afriza+%26+Ekka" +
    "&dates=20260606T100000/20260606T140000" +
    "&details=Akad+Nikah+dan+Resepsi+Afriza+dan+Ekka" +
    "&location=Balikpapan";

  const mapsUrl =
    "https://www.google.com/maps/place/1%C2%B015'01.7%22S+116%C2%B054'00.4%22E/";

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_40%)]" />

        {/* Top Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-240px]
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.08]
            blur-[140px]
          "
        />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-white/60" />

            <span className="text-[10px] uppercase tracking-[0.32em] text-white/60">
              Save The Date
            </span>
          </div>

          {/* Ornament */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/20" />

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <Heart className="h-3.5 w-3.5 fill-white/20 text-white/50" />
            </div>

            <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Main Date */}
          <div className="relative mt-10">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-24 w-52 rounded-full bg-white/[0.06]" />
            </div>

            <h1 className="font-serif text-[52px] font-medium leading-none tracking-[0.06em] sm:text-[80px] md:text-[110px] lg:text-[132px]">
              06
              <span className="mx-2 text-white/30">•</span>
              06
              <span className="mx-2 text-white/30">•</span>
              2026
            </h1>

            <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-white/45 sm:text-xs">
              Sabtu • Juni • Dua Ribu Dua Puluh Enam
            </p>
          </div>

          {/* Description */}
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-white/55 sm:text-base md:text-lg">
            Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda
            untuk menjadi bagian dari hari istimewa perjalanan cinta kami.
          </p>
        </motion.div>

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
          "
        >
          {/* Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

          <div className="relative grid lg:grid-cols-2">
            {/* ================= LEFT ================= */}
            <div className="border-b border-white/10 p-8 sm:p-10 md:p-14 lg:border-b-0 lg:border-r">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Wedding Ceremony
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Akad & Resepsi
              </h2>

              <div className="mt-14 space-y-12">
                {/* Time */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                    Waktu
                  </p>

                  <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                    14.00 WITA — Selesai
                  </h3>
                </div>

                {/* Venue */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                    Venue
                  </p>

                  <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                    Kediaman Mempelai
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-8 text-white/55 md:text-base">
                    Jl. Ruhui Rahayu II RT.02 RW.06,
                    <br />
                    Gang Pertiwi, Sepinggan Baru
                    <br />
                    Balikpapan Selatan, Kalimantan Timur
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col justify-between p-8 sm:p-10 md:p-14">
              {/* Quote */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Blessing
                </p>

                <p className="mt-6 text-sm leading-8 text-white/55 md:text-base">
                  “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                  menciptakan untukmu pasangan hidup dari jenismu sendiri agar
                  kamu mendapatkan ketenangan darinya, dan dijadikan-Nya di
                  antaramu rasa kasih dan sayang.”
                </p>
              </div>

              {/* CTA */}
              <div className="mt-16">
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* Calendar */}
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                          y: -2,
                        }
                    }
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(googleCalendarUrl, "_blank")
                    }
                    className="
                      group
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-white
                      px-7
                      py-4
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.01]
                    "
                  >
                    <CalendarDays className="h-4 w-4" />

                    <span>Tambah Kalender</span>
                  </motion.button>

                  {/* Maps */}
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                          y: -2,
                        }
                    }
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(mapsUrl, "_blank")}
                    className="
                      group
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.03]
                      px-7
                      py-4
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-white/30
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <MapPin className="h-4 w-4" />

                    <span>Buka Maps</span>
                  </motion.button>
                </div>

                <p className="mt-7 text-xs leading-7 text-white/30">
                  Dengan penuh kebahagiaan kami mengundang Anda untuk hadir
                  dan menjadi bagian dari hari istimewa kami.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}