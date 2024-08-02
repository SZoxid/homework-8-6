import React from "react";
import Image from "next/image";

const Header = ({ imgSrc }) => {
  return (
    <div>
      <header className="flex flex-col items-center mt-[145px] ">
        <h2 className="text-[65px] font-bold font-sans leading-[77.5px]">
          Become a better <br /> business with us.
        </h2>
        <p className=" w-[580px] text-[21px] font-normal leading-[36px]  text-center mt-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
          tortor, ultricies ut justo eu.
        </p>
        <button className="w-[265px] h-[60px]  rounded-[150px] bg-[#8540F5] text-[20px] font-normal text-white mt-[30px]">
          Our Business
        </button>
        <div className="w-full h-[600px] mt-[130px]">
          <Image
            src={imgSrc}
            alt="img"
            width={1440}
            height={600}
            objectFit="cover"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
