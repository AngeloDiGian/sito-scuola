"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import PCTOCard from "./pctoCard";

import { pctos } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function PCTOSection() {
  const { ref } = useSectionInView("PCTO", 0.3);

  return (
    <section id="pcto" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>PCTO</SectionHeading>

      <div className="grid gap-4 max-w-[80rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pctos.map((pcto, index) => (
          <motion.div
            key={index}
            className="col-span-1"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            <PCTOCard {...pcto} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
