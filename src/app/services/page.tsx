"use client";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive, high-performing websites tailored to your needs, using the latest technologies for a seamless user experience.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive, visually appealing interfaces that enhance user engagement and improve overall usability.",
    href: "",
  },
  {
    num: "03",
    title: "Database Management",
    description:
      "I design and optimize databases for efficiency, security, and scalability to ensure smooth data handling.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I implement strategies to boost your website’s search engine ranking, increasing visibility and organic traffic.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-1 flex-col justify-center gap-6"
            >
              <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                {service.num}
              </div>
              <h3 className="text-5xl font-bold leading-none transition-all duration-500 group-hover:text-accent">
                {service.title}
              </h3>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
