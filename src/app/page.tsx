"use client";

import About from "@/components/about";
import Events from "@/components/events";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Team from "@/components/team";
import { MoveUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsView(true);
      } else {
        setIsView(false);
      }
    };

    // Call handleResize initially and add event listener for window resize
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      {isView && (
        <div
          className="fixed bottom-2 right-2 w-fit border border-dashed bg-[#001F4E] p-2 text-white"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <MoveUpIcon />
        </div>
      )}
    </>
  );
}
