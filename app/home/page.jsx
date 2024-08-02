import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="w-[1440px] m-auto">
      <Navbar />
      <Header imgSrc="/header-img.png" />
      <main className="flex items-end flex-col">
        <section className="w-[95%] mt-[165px]">
          <div>
            <div>
              <p className="text-[16px] text-[#6610F2] font-bold ">
                WHAT WE OFFER
              </p>
              <h2 className="w-[700px] text-[58px] font-bold leading-[70px] mt-[15px]">
                Agile focused business services and more.
              </h2>
            </div>
          </div>
          <div className="flex gap-[50px] mt-[90px]">
            <div>
              <Image src="/main1-home.png" alt="img" width={560} height={420} />
              <p className="text-[20px] font-semibold mt-[30px]">
                Lorem ipsum dolor
              </p>
              <p className="text-[21px] font-normal mt-[7px]">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <p className="text-[20px] font-semibold mt-[15px] underline">
                Browse
              </p>
            </div>
            <div>
              <Image src="/main1-home.png" alt="img" width={560} height={420} />
              <p className="text-[20px] font-semibold mt-[30px]">
                Lorem ipsum dolor
              </p>
              <p className="text-[21px] font-normal mt-[7px]">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <p className="text-[20px] font-semibold mt-[15px] underline">
                Browse
              </p>
            </div>
          </div>
        </section>
        <section className="w-[95%] mt-[150px] ">
          <div>
            <div>
              <p className="text-[16px] text-[#6610F2] font-bold ">
                OUT CUSTOMERS
              </p>
              <h2 className="w-[700px] text-[58px] font-bold leading-[70px] mt-[15px]">
                Agile focused business services and more.
              </h2>
            </div>
          </div>
          <div className="mt-[60px] flex gap-[66px] overflow-scroll">
            <div>
              <div>
                <Image
                  src="/human1-home.png"
                  alt="img"
                  width={160}
                  height={160}
                />
              </div>
              <div className="w-[500px] flex items-start gap-[35px] mt-[25px]">
                <Image src="/duble-home.svg" alt="img" width={40} height={40} />
                <p className="text-[21px] font-medium italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis donec eu mattis tincidunt viverra eu. Lacus turpis
                  felis
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/human2-home.png"
                  alt="img"
                  width={160}
                  height={160}
                />
              </div>
              <div className="w-[500px] flex items-start gap-[35px] mt-[25px]">
                <Image src="/duble-home.svg" alt="img" width={40} height={40} />
                <p className="text-[21px] font-medium italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis donec eu mattis tincidunt viverra eu. Lacus turpis
                  felis
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/human3-home.png"
                  alt="img"
                  width={160}
                  height={160}
                />
              </div>
              <div className="w-[500px] flex items-start gap-[35px] mt-[25px]">
                <Image src="/duble-home.svg" alt="img" width={40} height={40} />
                <p className="text-[21px] font-medium italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis donec eu mattis tincidunt viverra eu. Lacus turpis
                  felis
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] mt-[140px]">
          <div className="text-center">
            <p className="text-[16px] text-[#6610F2] font-bold ">SERVICES</p>
            <h2 className="text-[58px] font-bold leading-[70px] mt-[15px]">
              We provide or a huge <br /> list of services.
            </h2>
          </div>
          <div className="flex justify-between mt-[55px]">
            <div className="w-[355px] mt-[50px] text-center">
              <div className="flex justify-center items-center w-[155px] h-[155px] rounded-[50%] bg-[#E0CFFC] m-auto">
                <Image
                  src="/service1-home.svg"
                  alt="img"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-[20px] font-semibold mt-[50px]">
                Lorem ipsum dolor
              </h2>
              <p className="text-[16px] font-normal mt-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                donec eu mattis tincidunt viverra eu. Lacus turpis felis
              </p>
            </div>
            <div className="w-[355px]  mt-[50px] text-center">
              <div className="flex justify-center items-center w-[155px] h-[155px] rounded-[50%] bg-[#E0CFFC] m-auto">
                <Image
                  src="/service2-home.svg"
                  alt="img"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-[20px] font-semibold mt-[50px]">
                Lorem ipsum dolor
              </h2>
              <p className="text-[16px] font-normal mt-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                donec eu mattis tincidunt viverra eu. Lacus turpis felis
              </p>
            </div>
            <div className="w-[355px]  mt-[50px] text-center">
              <div className="flex justify-center items-center w-[155px] h-[155px] rounded-[50%] bg-[#E0CFFC] m-auto">
                <Image
                  src="/service3-home.svg"
                  alt="img"
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-[20px] font-semibold mt-[50px]">
                Lorem ipsum dolor
              </h2>
              <p className="text-[16px] font-normal mt-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                donec eu mattis tincidunt viverra eu. Lacus turpis felis
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
