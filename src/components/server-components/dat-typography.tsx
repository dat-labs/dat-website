import React from "react";
import { Comfortaa } from "next/font/google";
import clsx from "clsx";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function DatTypography({ className }) {
  return <span className={clsx(comfortaa.className, className)}>dat</span>;
}
