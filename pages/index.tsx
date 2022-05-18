import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-red-600 flex flex-col items-center ">
      <div
        onClick={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={classNames(
          active
            ? "overflow-auto border-green-600 border-8"
            : "overflow-hidden",
          "bg-blue-500 w-4/5 my-6 max-h-[90vh] text-9xl relative "
        )}
      >
        {!active && (
          <div className="absolute w-full h-full bg-slate-700 opacity-70"></div>
        )}
        <div className="overflow-y-hidden overflow-hidden">
          click me to activate. hover out to deactivate orem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </div>
      </div>

      <div className="bg-blue-500 w-4/5 h-[90vh] my-6 max-h-[90vh] text-9xl overflow-auto">
        orem Ipsum is simply dummy text of the printing and typesetting since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
    </div>
  );
};

export default Home;
