"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { about, experience, education, skills } from "@/constants";
import Card from "@/components/Card";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";

const About = () => {
  const [tab, setTab] = useState("experience");
  const tabs = ["experience", "education", "skills", "about me"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col items-center gap-[20px] xl:flex-row xl:items-start"
        >
          <TabsList className="mb-24 flex w-full max-w-[300px] flex-col gap-6 pt-[125px] text-white/60 xl:mx-10">
            {tabs.map((item, index) => (
              <div
                key={index}
                className="group flex items-center"
                onClick={() => setTab(item)}
              >
                <div
                  className={`${tab === item ? "w-[80px]" : "w-[50px]"} border-t-2 border-white/60 transition-all group-hover:w-[80px]`}
                ></div>
                <TabsTrigger
                  value={item}
                  className="text-xl group-hover:text-accent"
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>

                <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                  {experience.items.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        date={item.duration}
                        title={item.position}
                        subtitle={item.company}
                        description={item.description}
                      ></Card>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                  {education.items.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        date={item.duration}
                        title={item.degree}
                        subtitle={item.institution}
                        description={item.description}
                      ></Card>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <SkillCard
                        key={index}
                        icon={skill.icon}
                        name={skill.name}
                      />
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
