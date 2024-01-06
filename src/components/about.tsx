"use client";
import React, { useEffect } from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { UseSectionInView } from "@/lib/hooks";

export default function about() {
  const { ref } = UseSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
        <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello, I'm K Koyal, currently in the exciting phase of completing my final year in{" "}
        <span className="font-medium">B.Tech with a major in Computer Science</span>, My programming adventure is fueled by the joy of problem-solving, and there's nothing quite like the satisfaction of finding the perfect solution. I've built my foundation using{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB, </span>.{" "}
        I'm adept in <span className="font-medium">TypeScript.{" "}</span>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>,I wear the hats of a blogger and an open-source contributor, adding another layer to my passion for technology. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Sign language</span>. I'm also
        learning about graphics designing.
      </p>
    </motion.section>
  )
}
