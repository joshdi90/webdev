import Head from "next/head";
import ServiceCards from "../components/cards/ServiceCard";
import { ImgCarousel } from "../components/ImgCarousel";
import Link from "next/link";
import {
  GiVacuumCleaner,
  GiFamilyHouse,
  GiSparkles,
  GiWindow,
  GiCookingPot,
} from "react-icons/gi";
import { GoFile, GoArrowUp } from "react-icons/go";
import { useState } from "react";
import { useRef } from "react";
import JSXStyle from "styled-jsx/style";

export default function Home() {
  return (
    <>
      <Head>
        <title>SWPC | Home</title>
      </Head>
      <main className="main-home-container w-screen h-auto flex flex-col justify-center items-center">
        {/* <div className="bg-img w-screen h-screen fixed"></div> */}

        <section className="w-screen h-[530px] mt-2 flex justify-center items-center">
          <ImgCarousel />
        </section>

        <section
          id="about"
          className="home-info min-w-full h-max bg-[#FAFAFF] p-14  mt-[.4rem] z-0 "
        >
          <div className="home-info-items md:max-w-[50rem] h-auto m-auto py-10 flex flex-col items-center ">
            {/* ---------- Company Info --------------- */}
            {/* --------------------------------------- */}
            <h2 className="home-info-heading text-3xl font-medium mb-12 uppercase">
              Why <span className="home-info-span text-[#FF8CC6]">choose</span>{" "}
              us
            </h2>

            <p className="home-info-text text-center leading-8 text-lg text-[#969696]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              illum eum ipsum eligendi nulla, corrupti dolor ullam perspiciatis
              adipisci reiciendis repellendus rem eos accusantium sapiente
              dolorem perferendis modi ad totam, cum quisquam consequatur. Culpa
              fuga magnam fugiat aliquam corporis maxime?
            </p>

            {/* -------------- icon grid ----------------------- */}
            {/* ---------------below--------------------------
            
            - add links to icons to direct user to more info

            ------------------------------------------------------ */}

            <section className="w-full h-max mt-10 ">
              <div className="icons-grid w-full h-[23rem]">
                {/* ------- ------- Column Left----------------- */}

                <ul className="left-colum w-full flex flex-col justify-evenly items-start ">
                  <li className="flex justify-center items-center ">
                    <span className="pr-8">
                      <GoFile size={60} color={"#FF8CC6"} />
                    </span>
                    <p className="text-2xl text-[#969696]">Free Quotes</p>
                  </li>
                  <li className="flex justify-center items-center">
                    <span className="pr-8">
                      <GiFamilyHouse size={60} color={"#FF8CC6"} />
                    </span>
                    <p className="text-2xl text-[#969696]">
                      Residential Cleaning
                    </p>
                  </li>
                </ul>
                {/* -------------- Column right ----------------- */}

                <ul className="right-column w-full  flex flex-col justify-evenly items-start">
                  <li className=" flex justify-center items-center">
                    <span className="pr-8">
                      <GiWindow size={60} color={"#FF8CC6"} />
                    </span>
                    <p className="text-2xl text-[#969696]">Window Cleaning</p>
                  </li>
                  <li className="flex justify-center items-center">
                    <span className="pr-8">
                      <GiCookingPot size={60} color={"#FF8CC6"} />
                    </span>
                    <p className="text-2xl text-[#969696]">Oven Cleaning</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* -------------------------------------------- */}
        </section>

        {/* ------------------ service cards ------------------- */}
        {/* ---------------------------------------------------- */}
        <section
          id="service"
          className="card-container w-full h-max py-20 flex flex-col justify-center items-center"
        >
          <h2 className="service-heading mb-16 text-3xl font-medium uppercase">
            Our{" "}
            <span className="service-heading-span text-[#FF8CC6]">
              Services
            </span>
          </h2>
          <div className="home-card-wrap  w-full h-max flex flex-col justify-center items-center">
            <Link
              href={"/end-of-lease"}
              className="card-wrapper-comp w-4/5 h-96 px-8 my-16 bg-[#FAFAFF] border-[#d3d3d3] border-2 border-solid rounded-2xl flex flex-col justify-evenly items-center"
            >
              <ServiceCards
                heading={"End of Lease Clean"}
                price={"900"}
                icon={<GiVacuumCleaner size={50} color={"#FF8CC6"} />}
              />
            </Link>

            <Link
              href={"weekly-clean"}
              className="card-wrapper-comp w-4/5 h-96 px-8 my-16 bg-[#FAFAFF] border-[#d3d3d3] border-2 border-solid rounded-2xl flex flex-col justify-evenly items-center"
            >
              <ServiceCards
                heading={"Weekly Cleaning"}
                price={"150"}
                icon={<GiFamilyHouse size={50} color={"#FF8CC6"} />}
              />
            </Link>
            <Link
              href={"pressure-cleaning"}
              className="card-wrapper-comp w-4/5 h-96 px-8 my-16 bg-[#FAFAFF] border-[#d3d3d3] border-2 border-solid rounded-2xl flex flex-col justify-evenly items-center"
            >
              <ServiceCards
                heading={"Pressure Cleaning"}
                price={"200"}
                icon={<GiSparkles size={50} color={"#FF8CC6"} />}
              />
            </Link>
          </div>
        </section>

        {/* --------------More info----------
         ------------------------------------------------------*/}

        <section
          id=""
          className=" min-w-full h-max bg-[#FAFAFF] p-14 mt-[.4rem] mb-20 z-0"
        >
          <div className="md:max-w-[50rem] h-auto m-auto py-10 flex flex-col items-center ">
            <h2 className=" text-3xl font-medium mb-12 uppercase">
              Why use a professional <span>End of Lease</span> cleaner
            </h2>

            <p className="home-info-two text-justify leading-8 text-lg text-[#969696]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              dolor repellendus alias nisi corrupti aut exercitationem quos
              laboriosam totam illo. Modi ut consequuntur, quo in provident eos
              sit eius voluptas quos, nemo eligendi magnam commodi dolor
              aspernatur maxime recusandae cum soluta? Aliquam et alias unde
              numquam suscipit esse quaerat voluptatibus voluptatum ratione fuga
              libero, porro quasi velit tempore ut nihil! Id adipisci expedita
              possimus omnis sint sed suscipit! Soluta debitis quam ex tempora
              quia nihil nemo dicta quisquam quos unde!
            </p>
          </div>
        </section>
      </main>
      <div
        data-hidden="true"
        className="back-to-top fixed right-7 bottom-[10%] z-[9999] "
      >
        <Link href={"#"}>
          <GoArrowUp color="#FF8CC6" size={50} />
        </Link>
      </div>
    </>
  );
}
