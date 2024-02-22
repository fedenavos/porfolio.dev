import NextJS from "../components/icons/NextJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import React from "../components/icons/React.astro";
import Python from "../components/icons/Python.astro";
import Flutter from "../components/icons/Flutter.astro";
import Unity from "../components/icons/Unity.astro";

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  REACT: {
    name: "React",
    class: "bg-[#3998B6] text-white",
    icon: React,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#FFDC50] text-black",
    icon: Python,
  },
  FLUTTER: {
    name: "Flutter",
    class: "bg-[#3586DB] text-white",
    icon: Flutter,
  },
  UNITY: {
    name: "Unity",
    class: "bg-[#CCCCCC] text-black",
    icon: Unity,
  },
};