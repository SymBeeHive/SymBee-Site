import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export const RevealBento = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50 items-center flex flex-col gap-4">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://cdn.discordapp.com/attachments/1282096832805081275/1315411844806086778/davi.webp?ex=6757503e&is=6755febe&hm=b26498a554588823a082daa0ebb003d4712898f65a116cbcdf565ecda425ecd1&"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Olá, eu sou o Davi.{" "}
      <span className="text-zinc-400">Um dos fundadores da SymBee</span>
    </h1>
    <a
      href="https://www.linkedin.com/in/davi-in%C3%A1cio/"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Meu contato <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://youtube.com/@symbeehive"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube color="red" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://github.com/symbeehive"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/company/symbeehive/"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinkedin color="#0e65be" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://instagram.com/symbee_ofc"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram color="#e52447" />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      A SymBee nasceu para curar a dor de muitos desenvolvedores.{" "}
      <span className="text-zinc-400">
        a dificuldade de encontrar um freelance e conseguir trabalhar no mesmo.
        Por anos, eu sonhei em transformar minhas habilidades em trabalhos
        reais, mas a falta de oportunidades justas sempre foi um grande
        obstáculo. Foi aí que veio a ideia da SymBee.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="flex flex-col items-center gap-4 col-span-12">
    <FiMapPin className="text-3xl text-blue-400" />
    <p className="text-center text-lg text-zinc-400">
      Instituto <span className="text-center text-blue-400">PROA</span>
    </p>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center">
        Feito com ❤️ pela{" "}
        <a
          href="https://github.com/symbeehive"
          target="_blank"
          className="text-yellow-500 hover:underline"
        >
          SymBee
        </a>
      </p>
    </footer>
  );
};
