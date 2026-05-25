import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import {
  Heart,
  Sparkles,
  CornerDownRight,
} from "lucide-react";
import client from "../../client.jsx";
import Loading from "./Loading.jsx";

export default function WeddingGuestbook() {
  const [attendance, setAttendance] = useState("hadir");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // REPLY STATE
  const [replyTo, setReplyTo] = useState(null);
  const [replyName, setReplyName] = useState("");

  // FORM REFS
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // AVATAR THEMES
  const avatarThemes = [
    "from-stone-500 to-stone-700",
    "from-neutral-500 to-neutral-700",
    "from-zinc-500 to-zinc-700",
    "from-rose-400 to-rose-600",
    "from-amber-400 to-amber-600",
    "from-emerald-400 to-emerald-600",
    "from-slate-500 to-slate-700",
    "from-indigo-400 to-indigo-600",
  ];

  const getAvatarTheme = (name) => {
    const value = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return avatarThemes[value % avatarThemes.length];
  };

  // FETCH COMMENTS
  useEffect(() => {
    client
      .fetch(
        `*[_type == "comment"] | order(createdAt desc) {
          _id,
          name,
          message,
          attendance,
          parentId,
          createdAt
        }`
      )
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // HANDLE REPLY
  const handleReply = (commentId, commentName) => {
    setReplyTo(commentId);
    setReplyName(commentName);

    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 450);
    });
  };

  // SUBMIT COMMENT
  const handleSubmit = async () => {
    if (!formData.name || !formData.message) return;

    try {
      setIsSubmitting(true);

      const newComment = {
        _type: "comment",
        name: formData.name,
        message: formData.message,
        attendance,
        parentId: replyTo,
        createdAt: new Date().toISOString(),
      };

      const response = await client.create(newComment);

      setComments((prev) => [
        {
          ...newComment,
          _id: response._id,
        },
        ...prev,
      ]);

      // RESET FORM
      setFormData({
        name: "",
        message: "",
      });

      setAttendance("hadir");

      // RESET REPLY
      setReplyTo(null);
      setReplyName("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // TOTAL ATTENDANCE
  const totalAttendance = useMemo(() => {
    return comments.filter(
      (item) => item.attendance === "hadir"
    ).length;
  }, [comments]);

  // PARENT COMMENTS
  const parentComments = comments.filter(
    (item) => !item.parentId
  );

  // GET REPLIES
  const getReplies = (commentId) => {
    return comments.filter(
      (item) => item.parentId === commentId
    );
  };

  // FORMAT DATE
  const formatTime = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative isolate overflow-hidden bg-[#f8f5f1] px-5 py-24 sm:px-8 lg:px-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-5 py-2 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-neutral-500" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                Guestbook
              </span>
            </div>

            <h2 className="mt-8 font-serif text-4xl font-light tracking-tight text-neutral-900 md:text-6xl">
              Wishes & Prayers
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2] text-neutral-600 md:text-base">
              Kehadiran, doa, dan ucapan hangat dari keluarga serta
              sahabat menjadi hadiah terindah bagi perjalanan baru
              kami.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
            {/* FORM */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-5 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:rounded-[36px] sm:p-7 lg:sticky lg:top-10 lg:p-8">
                <div className="relative">
                  {/* HEADER */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                      Leave a Message
                    </p>

                    <h3 className="mt-3 font-serif text-2xl font-light leading-tight text-neutral-900 sm:text-3xl">
                      {replyTo
                        ? "Balas Ucapan"
                        : "Kirim Ucapan"}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      Berikan doa dan ucapan terbaik untuk mempelai.
                    </p>
                  </div>

                  {/* REPLY INFO */}
                  {replyTo && (
                    <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-black/5 bg-neutral-100/80 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0" />

                        <span>
                          Membalas komentar dari{" "}
                          <strong>{replyName}</strong>
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setReplyTo(null);
                          setReplyName("");
                        }}
                        className="self-start text-[11px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-900"
                      >
                        Batal
                      </button>
                    </div>
                  )}

                  {/* FORM */}
                  <div className="mt-7 space-y-5 sm:space-y-6">
                    {/* NAME */}
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                        Nama
                      </label>

                      <input
                        ref={nameInputRef}
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Masukkan nama Anda"
                        disabled={isSubmitting}
                        className="h-14 w-full rounded-2xl border border-black/5 bg-white/90 px-5 text-sm text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-4 focus:ring-black/5 disabled:opacity-70"
                      />
                    </div>

                    {/* ATTENDANCE */}
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                        Kehadiran
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setAttendance("hadir")}
                          className={`min-h-[56px] rounded-2xl border px-4 py-4 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${attendance === "hadir"
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-black/5 bg-white text-neutral-600 hover:border-neutral-200"
                            }`}
                        >
                          Hadir
                        </button>

                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() =>
                            setAttendance("tidak_hadir")
                          }
                          className={`min-h-[56px] rounded-2xl border px-4 py-4 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${attendance === "tidak_hadir"
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-black/5 bg-white text-neutral-600 hover:border-neutral-200"
                            }`}
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                        Ucapan & Doa
                      </label>

                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tuliskan ucapan terbaik untuk mempelai..."
                        disabled={isSubmitting}
                        className="min-h-[140px] w-full resize-none rounded-[24px] border border-black/5 bg-white/90 px-5 py-4 text-sm leading-[1.9] text-neutral-700 outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-4 focus:ring-black/5 disabled:opacity-70"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="mt-7 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-neutral-900 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Heart className="h-4 w-4 fill-white text-white" />

                        <span>
                          {replyTo
                            ? "Kirim Balasan"
                            : "Kirim Ucapan"}
                        </span>
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs leading-relaxed text-neutral-400">
                    Ucapan akan tampil setelah berhasil dikirim.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* COMMENTS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* STATS */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="rounded-[24px] border border-white/50 bg-white/70 px-6 py-5 shadow-sm backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    Total Wishes
                  </p>

                  <h3 className="mt-2 font-serif text-3xl text-neutral-900">
                    {comments.length}
                  </h3>
                </div>

                <div className="rounded-[24px] border border-white/50 bg-white/70 px-6 py-5 shadow-sm backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    Attendance
                  </p>

                  <h3 className="mt-2 font-serif text-3xl text-neutral-900">
                    {totalAttendance}
                  </h3>
                </div>
              </div>

              {/* LIST */}
              <div className="space-y-5">
                {isLoading || isSubmitting ? (
                  <Loading />
                ) : (
                  parentComments.map((comment) => {
                    const initials = comment.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("");

                    return (
                      <div key={comment._id}>
                        {/* MAIN COMMENT */}
                        <div className="overflow-hidden rounded-[28px] border border-white/50 bg-white/65 p-5 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:rounded-[32px] sm:p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-white/40 sm:h-14 sm:w-14 ${getAvatarTheme(
                                comment.name
                              )}`}
                            >
                              {initials}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-3">
                                <h4 className="text-base font-medium text-neutral-900">
                                  {comment.name}
                                </h4>

                                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                                  {comment.attendance === "hadir"
                                    ? "Hadir"
                                    : "Tidak Hadir"}
                                </span>
                              </div>

                              <p className="mt-1 text-xs text-neutral-400">
                                {formatTime(comment.createdAt)}
                              </p>
                            </div>
                          </div>

                          <p className="mt-5 text-[15px] leading-[2] text-neutral-600">
                            {comment.message}
                          </p>

                          {/* REPLY BUTTON */}
                          <button
                            onClick={() =>
                              handleReply(
                                comment._id,
                                comment.name
                              )
                            }
                            className="group mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-400 transition-all duration-300 hover:text-neutral-900"
                          >
                            <CornerDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />

                            Reply
                          </button>
                        </div>

                        {/* REPLIES */}
                        <div className="ml-4 mt-4 space-y-4 border-l border-black/5 pl-4 sm:ml-8 sm:pl-6">
                          {[...getReplies(comment._id)]
                            .sort(
                              (a, b) =>
                                new Date(a.createdAt) -
                                new Date(b.createdAt)
                            )
                            .map((reply) => {
                              const replyInitials = reply.name
                                .split(" ")
                                .slice(0, 2)
                                .map((word) => word[0])
                                .join("");

                              return (
                                <div
                                  key={reply._id}
                                  className="rounded-[24px] border border-white/50 bg-white/55 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:bg-white/70 sm:rounded-[28px] sm:p-5"
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xs font-semibold tracking-[0.1em] text-white shadow-sm ring-1 ring-white/30 sm:h-11 sm:w-11 ${getAvatarTheme(
                                        reply.name
                                      )}`}
                                    >
                                      {replyInitials}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-2">
                                        <h5 className="text-sm font-medium text-neutral-900">
                                          {reply.name}
                                        </h5>

                                        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                                          Reply
                                        </span>
                                      </div>

                                      <p className="mt-1 text-xs text-neutral-400">
                                        {formatTime(reply.createdAt)}
                                      </p>

                                      <p className="mt-3 text-sm leading-[1.9] text-neutral-600">
                                        {reply.message}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}