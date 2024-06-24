"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsXLg } from "react-icons/bs";

import { edCivica } from "@/lib/data";
import EdCivicaCard from "./edCivicaCard";
import EdCivicaModal from "./edCivicaModal";

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

export default function EdCivica() {
  const { ref } = useSectionInView("Ed. Civica");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedId]);

  return (
    <section id="ed-civica" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>Educazione Civica</SectionHeading>

      <div className="grid gap-4 max-w-[80rem] sm:grid-cols-1 md:grid-cols-2">
        {edCivica.map((item, index) => (
          <motion.div
            layoutId={`${index}`}
            key={index}
            className="col-span-1"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
            onClick={() => setSelectedId(`${index}`)}
          >
            <EdCivicaCard {...item} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={selectedId}
            className="fixed z-[999] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 rounded-none"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative p-8 rounded-lg max-w-[50rem] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <EdCivicaModal {...edCivica[selectedId]} />
              <motion.button
                className="absolute top-12 right-12 w-[2rem] h-[2rem] bg-white border border-gray-800 border-opacity-10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/15"
                onClick={() => setSelectedId(null)}
              >
                <BsXLg />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
