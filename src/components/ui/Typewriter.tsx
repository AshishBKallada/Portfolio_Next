"use client";
import { TypewriterEffect } from "./typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "AsherCode.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem] mb-[200px] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to future starts from here, lets connect !
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-800">
          Send Mail
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm hover:shadow-[0_6px_20px_rgba(255,255,255,0.9)]">
          Message
        </button>
      </div>
    </div>
  );
}
