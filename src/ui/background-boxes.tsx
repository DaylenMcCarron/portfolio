"use client";
import React from "react";
import { cn } from "./utils/cn";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(50).fill(1);
  // let colors = [
  //   "--sky-300",
  //   "--slate-300",
  // ];
  // const getRandomColor = () => {
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  return (
    <div
      style={{
        transform: ``,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
        >
          {cols.map((_, j) => (
            <div
              
              key={`col` + j}
              className="w-20 h-20  border-r border-t border-slate-800 relative"
            >
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
