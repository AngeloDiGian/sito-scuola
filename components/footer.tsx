import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import SectionXDivider from "./section-x-divider";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 pt-2 text-center text-gray-500">
      <p className="mb-10">
        Puoi trovare il codice del progetto su GitHub cliccando{"  "}
        <a
          href="https://github.com/AngeloDiGian/sito-scuola"
          target="_blank"
          className="flex justify-center items-center pl-1 underline"
        >
          <FaGithubSquare size={"1.2rem"} />
          QUI
        </a>
      </p>
      <small className="mb-2 block text-xs">
        &copy; 2024 Angelo. All rights reserved.
      </small>
      <p className="text-xs pt-1">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion and hosted by Vercel hosting.
      </p>
    </footer>
  );
}
