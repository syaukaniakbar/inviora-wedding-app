import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WeddingGuestbookPreview() {
  const comments = [
    {
      id: 1,
      name: "Rizky Ramadhan",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      message:
        "MasyaAllah akhirnya sampai juga di hari bahagia kalian 🥹 Semoga selalu diberikan keberkahan, rumah tangga yang sakinah, dan dipenuhi kebahagiaan sampai tua nanti.",
      time: "2 jam lalu",
      attendance: "Hadir",
      replies: [
        {
          id: 11,
          name: "Afriza & Ekka",
          isOwner: true,
          message:
            "Aamiin yaAllah 🤍 Terima kasih banyak sudah meluangkan waktu dan doa terbaiknya.",
          time: "1 jam lalu",
        },
      ],
    },
    {
      id: 2,
      name: "Nabila Putri",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      message:
        "Happy wedding untuk kalian berdua ✨ Semoga acara nya lancar sampai hari H. Maaf belum bisa hadir langsung tapi doa terbaik selalu menyertai 🤍",
      time: "5 jam lalu",
      attendance: "Tidak Hadir",
      replies: [
        {
          id: 22,
          name: "Afriza & Ekka",
          isOwner: true,
          message:
            "Tidak apa-apa 🤍 Terima kasih sudah menyempatkan mengirim doa dan ucapan hangat untuk kami.",
          time: "4 jam lalu",
        },
      ],
    },
    {
      id: 3,
      name: "Fajar Nugroho",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
      message:
        "Fix ini bakal jadi wedding paling aesthetic tahun depan 😭🔥 Congrats bro & sis!",
      time: "Kemarin",
      attendance: "Hadir",
      replies: [],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f5f1] px-5 py-28 sm:px-8 lg:px-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#d9c7b0]/40 blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-120px] h-[380px] w-[380px] rounded-full bg-[#e9dfd0]/60 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-neutral-500 shadow-sm backdrop-blur-xl">
            Guestbook
          </span>

          <h2 className="mt-8 font-serif text-4xl font-light tracking-tight text-neutral-900 md:text-6xl">
            Wishes & Prayers
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-[2] text-neutral-600 md:text-base">
            Kehadiran, doa, dan ucapan hangat dari keluarga serta sahabat
            menjadi hadiah terindah bagi perjalanan baru kami.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* FORM */}
          <div>
            <div className="sticky top-10 overflow-hidden rounded-[36px] border border-white/50 bg-white/65 p-6 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-8">
              {/* AMBIENT */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#d9c7b0]/20" />

              <div className="relative">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                    Leave a Message
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-light text-neutral-900">
                    Kirim Ucapan
                  </h3>
                </div>

                {/* INPUTS */}
                <div className="mt-8 space-y-5">
                  <div>
                    <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                      Nama
                    </label>

                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="h-14 w-full rounded-2xl border border-black/5 bg-white/80 px-5 text-sm text-neutral-700 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                      Kehadiran
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-medium text-emerald-700 transition-all duration-300 hover:-translate-y-1">
                        Hadir
                      </button>

                      <button className="rounded-2xl border border-neutral-200 bg-white px-4 py-4 text-sm font-medium text-neutral-600 transition-all duration-300 hover:-translate-y-1">
                        Tidak Hadir
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                      Ucapan & Doa
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tuliskan ucapan terbaik untuk mempelai..."
                      className="w-full rounded-[24px] border border-black/5 bg-white/80 px-5 py-4 text-sm leading-relaxed text-neutral-700 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <button className="group relative mt-8 w-full overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.3em] text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">Kirim Ucapan</span>
                </button>

                {/* NOTE */}
                <p className="mt-5 text-center text-xs leading-relaxed text-neutral-400">
                  Ucapan akan tampil setelah berhasil dikirim.
                </p>
              </div>
            </div>
          </div>

          {/* COMMENTS */}
          <div>
            {/* STATS */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-white/50 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Total Wishes
                </p>

                <h3 className="mt-2 font-serif text-3xl text-neutral-900">
                  128
                </h3>
              </div>

              <div className="rounded-2xl border border-white/50 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Attendance
                </p>

                <h3 className="mt-2 font-serif text-3xl text-neutral-900">
                  74
                </h3>
              </div>
            </div>

            {/* COMMENT LIST */}
            <div className="space-y-5">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="overflow-hidden rounded-[30px] border border-white/50 bg-white/65 p-6 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                >
                  {/* HEADER */}
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-semibold text-neutral-900">
                          {comment.name}
                        </h4>

                        <span
                          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${comment.attendance === "Hadir"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-neutral-100 text-neutral-500"
                            }`}
                        >
                          {comment.attendance}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-neutral-400">
                        {comment.time}
                      </p>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <p className="mt-5 text-sm leading-[2] text-neutral-600 md:text-[15px]">
                    {comment.message}
                  </p>

                  {/* ACTION */}
                  <div className="mt-5 flex items-center gap-5">
                    <button className="text-xs uppercase tracking-[0.25em] text-neutral-400 transition hover:text-neutral-700">
                      Reply
                    </button>

                    <button className="text-xs uppercase tracking-[0.25em] text-neutral-400 transition hover:text-neutral-700">
                      Like
                    </button>
                  </div>

                  {/* REPLIES */}
                  {comment.replies.length > 0 && (
                    <div className="mt-6 space-y-4 border-l border-neutral-200 pl-5">
                      {comment.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="rounded-[24px] border border-black/5 bg-white/80 p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-medium text-white">
                              AE
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="text-sm font-semibold text-neutral-900">
                                  {reply.name}
                                </h5>

                                {reply.isOwner && (
                                  <span className="rounded-full bg-neutral-900 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white">
                                    Mempelai
                                  </span>
                                )}
                              </div>

                              <p className="text-xs text-neutral-400">
                                {reply.time}
                              </p>
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-[1.9] text-neutral-600">
                            {reply.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* LOAD MORE */}
            <div className="mt-8 flex justify-center">
              <button className="rounded-full border border-black/5 bg-white/70 px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
