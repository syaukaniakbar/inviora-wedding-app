import { TypingAnimation } from "@/components/magicui/typing-animation";

function Hero() {
  return (
    <>
      <section className="min-h-screen max-h-screen flex flex-col bg-black justify-center space-y-12">
        <div className="mx-auto max-w-screen-xl text-center ">
          <h1 className="tracking-tight leading-snug text-left lg:text-center text-5xl sm:text-5xl md:text-6xl text-white px-12">
            I am a Software Developer based in East Borneo{" "}
            <span className="inline-block bg-[#3B82F6] px-2">
              <TypingAnimation className="text-5xl sm:text-5xl md:text-6xl font-normal text-white leading-none">
                turning bold ideas
              </TypingAnimation>
            </span>{" "}
            into elegant code and intuitive digital experiences
          </h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
