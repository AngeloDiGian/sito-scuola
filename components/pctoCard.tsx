"use client";

import { useRef } from "react";
import { pctos } from "@/lib/data";
import { FaLocationDot } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof pctos)[number];

export default function PCTOCard({
  titolo,
  descrizione,
  img,
  AS,
  altreInfo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] w-full border border-black/5 rounded-lg relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/5">
        <div className="pt-8 pb-8 px-10 sm:pl-10 sm:pt-10 flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{titolo}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {descrizione}
          </p>
          <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            <p className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
              {AS}
            </p>
            <p className="flex bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 items-center justify-center gap-1">
              <FaLocationDot size={".6rem"} />
              {altreInfo.luogo}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
