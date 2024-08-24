import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import line1Anim from "@/public/animations/lines_1.json";
import { BorderBeam } from "@/components/magicui/border-beam";
import TypingAnimation from "@/components/magicui/typing-animation";

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
        <div
          className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:1/2 h-[75vh] flex flex-col items-center justify-center pb-20 pl-10 pr-10 sm:pl-10 sm:pr-10 md:pl-10 md:pr-10 lg:pl-0 lg:pr-0 xl:pl-0 xl:pr-0"
          style={{
            overflow: "hidden",
          }}
        >
          <div
            className="relative flex flex-col items-center justify-center p-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "1rem",
              backdropFilter: "blur(10px)",
              zIndex: 2,
            }}
          >
            <BorderBeam colorFrom="#01193F" />
            <h1
              className={title({ color: "violet", size: "lg" })}
              style={{
                fontFamily: "NouvelR",
                fontSize: "3rem",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              Milan <b>CAMUS</b>
            </h1>
            <Code color="secondary" className="mt-3">
              <TypingAnimation className="text-small" text={t("global.job")} />
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
              top: "15vh",
              left: "-2vh",
              opacity: 0.3,
              overflow: "hidden",
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
        <div
          className="hidden sm:hidden md:block md:w-1/2  lg:w-1/2  xl:1/2 h-[75vh]"
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <img
            src="memoji.png"
            style={{
              objectFit: "contain",
              height: "40vw",
              maxHeight: "500px",
              float: "right",
              marginBottom: "10vh",
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
            top: "50vh",
            backgroundColor: "rgba(0,255,0,0.5)",
          }}
        />
      </div>
      <div className="flex flex-wrap overflow-hidden w-[100vw]" style={{}}>
        <div
          className="w-full h-[15vh] hidden sm:hidden md:block"
          style={{
            zIndex: 1,
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0) 0%, #000e24 60%)",
            position: "absolute",
            height: "25vh",
            top: "65vh",
            width: "100vw",
          }}
        />
        <Lottie
          animationData={line1Anim}
          loop={false}
          color="red"
          height={"50vh"}
          interactivity={{
            mode: "scroll",
            actions: [
              {
                visibility: [0, 0.2],
                type: "stop",
                frames: [0],
              },
              {
                visibility: [0.2, 0.5],
                type: "seek",
                frames: [0, 300],
              },
            ],
          }}
        />
        <div
          className="w-full flex relative top-[-50vh]"
          style={{
            zIndex: 2,
          }}
        >
          <div className="hidden sm:hidden md:block md:w-1/2  lg:w-1/2  xl:1/2 h-[50vh]" />
          <div
            className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:1/2 h-[50vh] flex flex-col items-center justify-center"
            style={{
              backgroundColor: "rgba(255,0,0,.5)",
              display: "flex",
              flexDirection: "column-reverse",
              zIndex: 9999,
            }}
          >
            <div
              className="relative flex flex-col items-center justify-center p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
                zIndex: 9999,
              }}
            >
              <BorderBeam colorFrom="#01193F" />
              <h2
                className={title({ color: "violet", size: "lg" })}
                style={{
                  fontFamily: "NouvelR",
                  fontSize: "2rem",
                  zIndex: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {t("global.education.dut.title")}
              </h2>
              <Code color="secondary" className="mt-3">
                {t("global.education.dut.location")} •{" "}
                {t("global.education.dut.date")}
              </Code>
              <ul
                style={{
                  listStyleType: "initial",
                }}
              >
                <li>{t("global.education.dut.details.1")}</li>
                <li>{t("global.education.dut.details.2")}</li>
                <li>{t("global.education.dut.details.3")}</li>
                <li>{t("global.education.dut.details.4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
