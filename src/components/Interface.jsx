import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={
        props.className ||
        `
  h-screen w-screen pl-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `
      }
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-white">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic text-black">Hector Lopez</span>
      </h1>
      <motion.p
        className="text-xl  mt-4 text-gray-100"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        FullStack Developer with 3 years of experience, based in Colombia
        <br />
        Who loves to learn new technologies and share knowledge with others.
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "React / Next",
    level: 95,
  },
  {
    title: "Redux / Zustand / Context",
    level: 70,
  },
  {
    title: "TypeScript / JavaScript",
    level: 90,
  },
  {
    title: "REST API / GraphQL / WS",
    level: 65,
  },
  {
    title: "GraphQL / Apollo / URQL",
    level: 60,
  },
  {
    title: "Jest / Vitest / RTK",
    level: 70,
  },
  {
    title: "HTML5 / HTML",
    level: 90,
  },
  {
    title: "Git / Github / Gitlab / Bitbucket",
    level: 90,
  },
  {
    title: "Python",
    level: 50,
  },
  {
    title: "Go",
    level: 50,
  },
  { title: "Java / Spring Boot", level: 50 },
  {
    title: "Node / Express / Nest",
    level: 60,
  },
  {
    title: "AWS",
    level: 60,
  },
  {
    title: "GCP",
    level: 45,
  },
  {
    title: "Three.js / React Three Fiber",
    level: 10,
  },
  {
    title: "Cypress / TestCafe",
    level: 65,
  },
  {
    title: "Prometheus / Grafana",
    level: 0,
  },
  {
    title: "Kubernetes",
    level: 0,
  },
  {
    title: "Docker",
    level: 55,
  },
  {
    title: "CSS / Tailwind / Bootstrap / Material / Antd / Chakra",
    level: 80,
  },
  {
    title: "MongoDB / MySQL / PostgreSQL / Firebase / Supabase",
    level: 50,
  },
];

const languages = [
  {
    title: "Spanish",
    level: 100,
  },
  {
    title: "English",
    level: 90,
  },
  {
    title: "Portuguese",
    level: 40,
  },
];
const SkillsRender = ({ skills }) => {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill, index) => (
        <div className="w-64" key={index}>
          <motion.h3
            className="text font-bold text-gray-800"
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1 + index * 0.2,
                },
              },
            }}
          >
            {skill.title}
          </motion.h3>
          <div className="h-2 w-full bg-white rounded-full mt-2">
            <motion.div
              className="h-full bg-indigo-800 rounded-full "
              style={{ width: `${skill.level}%` }}
              initial={{
                scaleX: 0,
                originX: 0,
              }}
              variants={{
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
const Languages = ({ languages }) => {
  return (
    <>
      {languages.map((lng, index) => (
        <div className="w-64" key={index}>
          <motion.h3
            className="text font-bold text-gray-800"
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 2 + index * 0.2,
                },
              },
            }}
          >
            {lng.title}
          </motion.h3>
          <div className="h-2 w-full bg-white rounded-full mt-2">
            <motion.div
              className="h-full bg-indigo-800 rounded-full "
              style={{ width: `${lng.level}%` }}
              initial={{
                scaleX: 0,
                originX: 0,
              }}
              variants={{
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 1,
                    delay: 2 + index * 0.2,
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
const SkillsSection = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="flex items-center gap-8 w-full justify-center"
      >
        <div className="space-y-4 w-full">
          <h2 className="text-5xl font-bold text-white">Skills</h2>
          <div className="flex  gap-8 pb-24 md:pb-16 flex-wrap">
            <SkillsRender skills={skills.slice(0, 4)} />
            <SkillsRender skills={skills.slice(4, 8)} />
            <SkillsRender skills={skills.slice(8, 12)} />
            <SkillsRender skills={skills.slice(12, 16)} />
          </div>
          <div className="w-ful">
            <h2 className="text-5xl font-bold mt-8 text-white">Languages</h2>
            <div className="space-y-4 pt-8">
              <Languages languages={languages} />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-center text-white">
        Let's Connect
      </h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
