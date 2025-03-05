"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of experience",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              key={index}
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-6xl font-bold text-accent"
              />
              <p
                className={`${stat.text.length > 15 ? "max-w-[100px]" : "max-w-[200px]"} leading-snug text-white`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
