import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function IndexPage() {
  const { t } = useTranslation();

  // Function that generates a defined array of x random number between two numbers
  const random = (min: number, max: number, x: number) =>
    Array.from(
      { length: x },
      () => Math.floor(Math.random() * (max - min)) + min
    );
  return (
    <DefaultLayout>
      <div
        className="flex flex-wrap overflow-hidden h-[75vh] w-[100vw]"
        style={{
          backgroundImage: "radial-gradient(#2e2e2e 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundColor: "#000e24",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:1/2 h-[75vh] flex flex-col items-center justify-center pb-20">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "4rem",
              borderRadius: "1rem",
              backdropFilter: "blur(10px)",
              zIndex: 2,
            }}
          >
            <h1
              className={title({ color: "violet", size: "lg" })}
              style={{
                fontFamily: "NouvelR",
                fontSize: "3rem",
                zIndex: 1,
              }}
            >
              Milan <b>CAMUS</b>
            </h1>
            <Code color="secondary" className="mt-3">
              {t("global.job")}
            </Code>
          </div>
          <motion.img
            src="blob (1).svg"
            animate={{
              scale: random(0.98, 1.02, 10),
              rotateZ: random(-20, 40, 10),
            }}
            transition={{
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              objectFit: "contain",
              height: "500px",
              maxHeight: "500px",
              zIndex: 0,
              position: "absolute",
              bottom: "2vh",
              left: "-2vh",
              opacity: 0.3,
            }}
          />
          <motion.img
            src="blob (2).svg"
            animate={{
              scale: random(0.98, 1.02, 10),
              rotateY: random(-25, 25, 10),
            }}
            transition={{
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              objectFit: "contain",
              height: "500px",
              maxHeight: "500px",
              zIndex: 0,
              position: "absolute",
              top: "-15vh",
              left: "25vh",
              opacity: 0.3,
            }}
          />
        </div>
        <div className="hidden sm:hidden md:block md:w-1/2  lg:w-1/2  xl:1/2 h-[75vh] flex align-end">
          <img
            src="memoji.png"
            style={{
              objectFit: "contain",
              height: "40vw",
              maxHeight: "500px",
              zIndex: 0,
              position: "absolute",
              bottom: "4rem",
              right: "2rem",
            }}
          />
        </div>
        <div
          className="w-full h-[15vh]"
          style={{
            zIndex: 1,
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000e24 60%)",
            position: "absolute",
            height: "25vh",
            width: "100vw",
            bottom: 0,
          }}
        ></div>
      </div>
    </DefaultLayout>
  );
}
