// Logo.tsx
import React from 'react';
import Image from 'next/image';
import indiaFluxIcon from "@/components/icons/indiaflux.jpg";
import indiaScoopIcon from "@/components/icons/indiascoop.png";



interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Logo = ({ src, alt, width = 48, height = 48 }:LogoProps) => (
  <Image src={src} alt={alt} width={width} height={height} className="h-12 w-auto" />
);

export default function Featured() {
  return (
    <div className="container mx-auto px-4 py-10 items-center">
      <h2 className="font-semibold text-3xl mb-6 text-center text-purple-500">
        Also Featured In
      </h2>
      <div className="flex flex-row space-x-9 justify-center">
        <Logo src={indiaFluxIcon.src} alt="Logo 1" width={400} height={15} />
        <Logo src={indiaScoopIcon.src} alt="Logo 2" width={500} height={48} />
        <Logo src={indiaFluxIcon.src} alt="Logo 3" width={400} height={48} />
      </div>
    </div>
  );
}