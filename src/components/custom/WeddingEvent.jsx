import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Sparkles,
  Heart,
} from "lucide-react";

export default function WeddingEvent() {
  // GOOGLE CALENDAR
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Pernikahan+Afriza+%26+Ekka" +
    "&dates=20260606T100000/20260606T140000" +
    "&details=Akad+Nikah+dan+Resepsi+Afriza+dan+Ekka" +
    "&location=Lokasi+Pernikahan";

  // DUMMY GOOGLE MAPS
  const mapsUrl =
    "https://maps.google.com/?q=Monas+Jakarta";

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-6 lg:px-8">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
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
            bg-white/10
            blur-[140px]
          "
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            y: [-10, 20, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/[0.04]
            blur-[140px]
          "
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-white/60" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              Save The Date
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-white/10" />

            <Heart className="h-3.5 w-3.5 fill-white/20 text-white/20" />

            <div className="h-px w-14 bg-white/10" />
          </div>

          <h1 className="mt-10 font-serif text-5xl tracking-[0.08em] text-white sm:text-6xl md:text-8xl">
            06 • 06 • 2026
          </h1>

          <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-white/45 md:text-sm">
            Sabtu • Juni • Dua Ribu Dua Puluh Enam
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            shadow-[0_30px_120px_-30px_rgba(0,0,0,1)]
            backdrop-blur-2xl
            sm:p-8
            md:p-14
          "
        >
          {/* Ambient Light */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

          {/* Blur Orb */}
          <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

          {/* GRID */}
          <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
                Wedding Ceremony
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                Akad & Resepsi
              </h2>

              <div className="mt-12 space-y-10">
                {/* TIME */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                    Waktu
                  </p>

                  <h3 className="mt-3 text-2xl font-medium text-white md:text-3xl">
                    10.00 WITA — Selesai
                  </h3>
                </div>

                {/* VENUE */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                    Venue
                  </p>

                  <h3 className="mt-3 text-2xl font-medium text-white md:text-3xl">
                    Kediaman Mempelai
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-[2] text-white/55 md:text-base">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                    <br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="flex flex-col justify-between"
            >
              {/* QUOTE */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Blessing
                </p>

                <p className="mt-6 text-sm leading-[2.1] text-white/55 md:text-base">
                  “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
                  menciptakan untukmu pasangan hidup dari jenismu sendiri agar
                  kamu mendapatkan ketenangan darinya, dan dijadikan-Nya di
                  antaramu rasa kasih dan sayang.”
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-14">
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* CALENDAR */}
                  <motion.button
                    whileHover={{
                      y: -2,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="button"
                    onClick={() =>
                      window.open(googleCalendarUrl, "_blank")
                    }
                    className="
                      group
                      relative
                      flex flex-1 items-center justify-center gap-3
                      overflow-hidden
                      rounded-full
                      bg-white
                      px-7
                      py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-black
                      transition-all
                      duration-500
                    "
                  >
                    <CalendarDays className="h-4 w-4" />

                    <span className="relative z-10">
                      Tambah Kalender
                    </span>

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>

                  {/* MAPS */}
                  <motion.button
                    whileHover={{
                      y: -2,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="button"
                    onClick={() => window.open(mapsUrl, "_blank")}
                    className="
                      group
                      relative
                      flex flex-1 items-center justify-center gap-3
                      overflow-hidden
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.03]
                      px-7
                      py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-white
                      transition-all
                      duration-500
                      hover:border-white/30
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <MapPin className="h-4 w-4" />

                    <span className="relative z-10">
                      Buka Maps
                    </span>

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                </div>

                {/* NOTE */}
                <p className="mt-7 text-xs leading-[2] text-white/30">
                  Dengan penuh kebahagiaan kami mengundang Anda untuk hadir
                  dan menjadi bagian dari hari istimewa kami.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}