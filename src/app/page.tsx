import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-32 xl:pt-8">
          <div className="order-2 flex flex-col text-center xl:order-none xl:text-left">
            <span className="text-accent">Hello, my name is</span>
            <h1 className="h1 mb-6">
              Alan Alvarado<span className="text-accent">.</span>
              <br />
              <span className="text-white/60">I engineer things</span>
            </h1>
            <p className="max-w-[500px] text-white/80">
              I am a <span className="text-accent">full stack developer</span>{" "}
              that is <span className="text-accent">passionate</span> about
              building responsive, user-friendly web applications. I{" "}
              <span className="text-accent">love solving problems</span>,
              learning new technologies, and turning ideas into efficient
              applications.
            </p>
          </div>
          <div className="mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
