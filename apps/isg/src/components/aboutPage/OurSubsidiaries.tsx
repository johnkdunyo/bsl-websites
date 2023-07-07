import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Animate } from "../animations/ScrollAnimator";

const SingleSubsidiaryCard = ({
  imageURL,
  description,
  href,
}: {
  description: string;
  imageURL: string;
  href: string;
}) => {
  return (
    <Animate.ScaleIn className="w-full">
      <div className="bg-[#FFFFFF] w-full  justify-between p-8 rounded-[50px] flex flex-col gap-6 sm:h-[23rem] ">
        <div>
          <div className="h-20  flex items-start justify-start">
            <img src={imageURL} alt="spectrum" className="h-full  " />
          </div>
          <p className="text-[#1D365A] paragraphText1 ">{description}</p>
        </div>

        <div>
          <motion.button
            className="custom-button1"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <Link href={href}>Learn More</Link>
          </motion.button>
        </div>
      </div>
    </Animate.ScaleIn>
  );
};

const OurSubsidiaries = () => {
  return (
    <section className="bg-[#E8E8E8]">
      <div className="flex flex-col custom-container py-20 gap-10 max-w-6xl">
        <div className="flex flex-col justify-center text-center gap-4 ">
          <Animate.FadeUp>
            <h1 className="headerText1 text-[#1D365A]">Our Subsidiaries</h1>
          </Animate.FadeUp>
          <Animate.FadeUp>
            <p className="paragraphText1 text-[#1D365A]">
              Broadspectrum prides itself in carrying out its mandate through
              its various subsidiaries. With our qualified team of experts, we
              offer you a full circle service experience with the synergy of our
              subsidiaries in communication, connectivity, and application
              software.
            </p>
          </Animate.FadeUp>
        </div>

        <SingleSubsidiaryCard
          description="Spectrum Fibre Limited is a Fibre Optic Infrastructure Company in Ghana
        with over 4000+km of Fibre covering the Western, Eastern and Northern
        Corridors of Ghana. Formed as a Public Private Partnership between
        Broadspectrum Limited and the government of Ghana through the Ghana
        Infrastructure Investment Fund (GIIF) in the year 2017."
          imageURL="/assets/icons/spectrum.svg"
          href="/spectrumfibre"
        />

        <div className="flex flex-col  gap-10 sm:flex-row">
          <SingleSubsidiaryCard
            description="Payment Service Provider (PSP) Licensed Business providing services for payment gateway and bill Payment – E.G. Northern Electricity Distribution Company (NedCo), Marketplace (E-Agric)"
            imageURL="/assets/icons/bdp.svg"
            href="/bdp"
          />

          <SingleSubsidiaryCard
            description="Fibre Maintenance and Logistics Company"
            imageURL="/assets/icons/isg.svg"
            href="/isg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSubsidiaries;
