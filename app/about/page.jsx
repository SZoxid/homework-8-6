import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-[1440px] m-auto">
      <Navbar />
      <Header imgSrc="/header-about.png" />
      <main>
        <section className="w-[85%] ml-[235px]">
          <div>
            <h2 className="text-[58px] font-bold font-sans mt-[190px]">
              Here is what’s happening in <br /> the world of talk business.
            </h2>
          </div>
          <div className="flex mt-[195px] gap-[80px]">
            <div className="w-[250px] flex flex-col">
              <p className="text-[16px] text-[#6610F2] font-bold ">MAY 2021</p>
              <h2 className="text-[24px] font-bold mt-[24px]">
                Agile focused business services and more.
              </h2>
            </div>
            <div>
              <Image
                src="/main1-about.png"
                alt="img"
                width={770}
                height={400}
              />
            </div>
          </div>
          <div className="flex mt-[85px] gap-[80px]">
            <div className="w-[250px] flex flex-col">
              <p className="text-[16px] text-[#6610F2] font-bold ">MAY 2021</p>
              <h2 className="text-[24px] font-bold mt-[24px]">
                Agile focused business services and more.
              </h2>
            </div>
            <div>
              <Image
                src="/main2-about.png"
                alt="img"
                width={770}
                height={400}
              />
            </div>
          </div>
          <div className="flex mt-[85px] gap-[80px]">
            <div className="w-[250px] flex flex-col">
              <p className="text-[16px] text-[#6610F2] font-bold ">MAY 2021</p>
              <h2 className="text-[24px] font-bold mt-[24px]">
                Agile focused business services and more.
              </h2>
            </div>
            <div>
              <Image
                src="/main3-about.png"
                alt="img"
                width={770}
                height={400}
              />
            </div>
          </div>
          <div className="mt-[40px] ml-[330px]">
            <Image src="/main4-about.png" alt="img" width={350} height={60} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
