"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Sono uno studente presso l'{" "}
        <span className="font-medium">I.I.S. Ettore Majorana</span>, indirizzo
        informatico e da sempre mi è piaciuta la programmazione ed in
        particolare mi piace il{" "}
        <span className="font-medium italic">web e mobile development</span>.{" "}
        <span className="italic">
          Quello che più mi piace della programmazione
        </span>{" "}
        sono gli aspetti di problem-solving.{" "}
        <span className="underline">Adoro</span> quella sensazione di quando
        riesci a risolvere un problema che ti tormentava da tempo e che adesso
        finalmente funziona.
      </p>
      <p className="mb-3">
        <span className="italic">Quando non sono alle prese col computer</span>,
        una mia altra passione è la fotografia, cercando di ottenere uno scatto
        sempre più unico e che si differenzi da tutti gli altri.
      </p>
      <p>
        Qui di seguito sono elencate le{" "}
        <span className="font-medium italic">attività di PCTO</span> e di{" "}
        <span className="font-medium italic">Educazione Civica</span> svolte
        durante questo anno scolastico.
      </p>
    </motion.section>
  );
}
