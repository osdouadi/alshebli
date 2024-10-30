import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
      <Image src={"/logo.jpeg"} alt="alshalabi" width={800} height={800} className="h-auto w-[5.6rem] md:w-[6.55rem]" />
  );
};

export default Logo;
