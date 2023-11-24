"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Law_difference_section from "./law_difference_section";
import { EmblaOptionsType } from "embla-carousel-react";

type Props = {
  options?: EmblaOptionsType;
};

const Carousel_section = ({ options }: Props) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla_container flex">
        <Law_difference_section />;
        <Law_difference_section />;
        <Law_difference_section />;
      </div>
    </div>
  );
};

export default Carousel_section;
