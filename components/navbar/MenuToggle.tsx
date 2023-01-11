import * as React from "react";
import { motion } from "framer-motion";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 0%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({isOpen, toggle }:any) => {

 return <button onClick={toggle} className="h-12 w-12  inline-flex items-center justify-start px-[1rem] py-2 overflow-hidden font-medium transition-all bg-gray-600 rounded-full group shadow-lg top-2">
  <span className="w-40 h-40 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-in-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
  <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out group-hover:text-white">
    <svg width="23" height="23" viewBox="0 0 23 23" className={`invert h-5 w-5 hover:scale-125 transition-all duration-150 delay-150`}>
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
    </span>
  </button>
};



