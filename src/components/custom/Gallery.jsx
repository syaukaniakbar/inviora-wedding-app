import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useAnimation,
    useReducedMotion,
    useInView,
} from "framer-motion";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const shouldReduceMotion = useReducedMotion();

    // SECTION ANIMATION CONTROL
    const controls = useAnimation();
    const galleryRef = useRef(null);

    // Replay animation whenever entering viewport
    const isInView = useInView(galleryRef, {
        amount: 0.2,
        margin: "-10% 0px -10% 0px",
    });

    useEffect(() => {
        if (isInView) {
            controls.start("show");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    // Prevent body scroll when modal opens
    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "unset";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    const photos = [
        {
            id: 1,
            src: "/abang-eza-1.jpeg",
            alt: "Prewedding main portrait",
            caption: "The Beginning of Us",
            className:
                "md:col-span-5 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full",
        },
        {
            id: 2,
            src: "/abang-eza-5.jpeg",
            alt: "Candid moment laughing",
            caption: "Laughter & Promises",
            className: "md:col-span-7 aspect-[16/10]",
        },
        {
            id: 3,
            src: "/abang-eza-3.jpeg",
            alt: "Wedding ring detail",
            caption: "Details of Forever",
            className: "md:col-span-3 aspect-square",
        },
        {
            id: 4,
            src: "/abang-eza-4.jpeg",
            alt: "Couple embracing softly",
            caption: "Hand in Hand",
            className: "md:col-span-4 aspect-square",
        },
    ];

    // PREMIUM STAGGER ANIMATION
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 40,
            scale: shouldReduceMotion ? 1 : 0.96,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-[#f8f5f1] px-4 py-24 sm:px-6 md:px-12 lg:px-20 antialiased">
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-14 md:mb-20 text-center"
            >
                <p className="mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-neutral-500 font-medium">
                    Our Moments
                </p>

                <h2 className="font-serif text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                    Captured Memories
                </h2>

                <div className="mx-auto mt-4 h-px w-12 bg-neutral-300" />

                <p className="mx-auto mt-5 max-w-md text-xs sm:text-sm font-light leading-relaxed text-neutral-500">
                    Sekeping cerita perjalanan kami yang dipenuhi tawa,
                    kenyamanan, dan komitmen untuk saling melengkapi.
                </p>
            </motion.div>

            {/* GALLERY */}
            <div ref={galleryRef} className="mx-auto max-w-5xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-5"
                >
                    {photos.map((photo) => (
                        <motion.button
                            key={photo.id}
                            variants={itemVariants}
                            layoutId={`card-container-${photo.id}`}
                            onClick={() => setSelectedImage(photo)}
                            whileHover={
                                shouldReduceMotion
                                    ? {}
                                    : {
                                        y: -6,
                                        scale: 1.01,
                                    }
                            }
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 22,
                            }}
                            className={`group relative overflow-hidden rounded-[28px] bg-neutral-200 border border-white/70 shadow-sm cursor-pointer will-change-transform ${photo.className}`}
                        >
                            {/* IMAGE */}
                            <motion.img
                                layoutId={`img-${photo.id}`}
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                draggable={false}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* TEXT */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                <span className="text-[9px] uppercase tracking-widest text-white/80 font-medium block mb-1">
                                    Click to View
                                </span>

                                <p className="font-serif text-lg text-white font-light">
                                    {photo.caption}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* MODAL */}
            <AnimatePresence mode="wait">
                {selectedImage && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/95 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* CLOSE */}
                        <motion.button
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-6 right-6 text-white/50 hover:text-white text-[11px] tracking-[0.3em] uppercase font-light transition py-2 px-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕ Close
                        </motion.button>

                        {/* IMAGE */}
                        <motion.div
                            layoutId={`card-container-${selectedImage.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl overflow-hidden rounded-2xl"
                        >
                            <motion.img
                                layoutId={`img-${selectedImage.id}`}
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="object-contain max-h-[80vh] rounded-2xl"
                            />
                        </motion.div>

                        {/* INFO */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 14 }}
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-center"
                        >
                            <p className="font-serif text-xl text-white font-light tracking-wide">
                                {selectedImage.caption}
                            </p>

                            <p className="text-[11px] uppercase tracking-widest text-neutral-400 mt-2 font-light">
                                {selectedImage.alt}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Gallery;