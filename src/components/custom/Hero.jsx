import { TypingAnimation } from "@/components/magicui/typing-animation";

function Hero() {
  return (
    <>
      <section className="flex flex-col bg-black justify-center space-y-12">
        <div className="mx-auto max-w-screen-xl text-center ">
          <h1 className="tracking-tight leading-snug text-left lg:text-center text-4xl sm:text-5xl md:text-6xl text-white px-12">
            I am a Software Developer based in East Borneo{" "}
            <span className="inline-block bg-gradient-to-r from-white via-gray-400 to-white px-0 md:px-2">
              <TypingAnimation className="text-4xl sm:text-5xl md:text-6xl font-normal text-black leading-none">
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
