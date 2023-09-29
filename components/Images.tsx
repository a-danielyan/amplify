import React from "react";
import Image from "next/image";

type Props = {
  src: any;
  alt: string;
  width: string;
  height: string;
};

const Images = ({ src, alt, width, height }: Props) => {
  return (
    <div style={{ width, height }}>
      <Image src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Images;
