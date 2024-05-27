import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";
{
  /* eslint-disable-next-line react/no-unescaped-entities */
}
const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="FocusedP"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Dream Fairly Big, Work Kinda Hard, Achieve Cool Sh**! Sounds
          half-assed? Well, Fu** You too.
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          As a passionate freelancer, I live by a simple mantra: Sky is the
          limit, but keep it real. I mix cutting-edge tech with classic design
          to create engaging digital experiences. Inspired by nature and
          literature, I am always learning and ready to tackle new challenges.
          Every project is a chance to make a lasting impact—one pixel at a
          time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
