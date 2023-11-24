"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  DotButton,
} from "./EmblaCarouselArrowsAndDots";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { LuDownloadCloud } from "react-icons/lu";

type Props = {
  slides: {
    title: string;
    list: string[];
    image: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarouselSlides = ({ slides, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="p-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {slides.map((item, index) => (
              <div
                className="pl-4 w-full relative flex flex-[0_0_100%] items-center justify-between gap-16"
                key={index}
              >
                <div className="p-2 rounded-md">
                  <Image
                    className="rounded-md shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)]"
                    src="/images/section_1.jpg"
                    alt="question-bank"
                    width={350}
                    height={500}
                  />
                </div>
                <div className="max-w-[500px]">
                  <h2 className="text-3xl font-semibold">
                    Prelims QBank with explanations in visual learning format
                  </h2>
                  <ul className="py-6 list-disc text-[#333] flex flex-col gap-1">
                    <li>
                      High yield prelims questions with Mains explanations
                    </li>
                    <li> Visual learning format, stories, animations</li>
                    <li>
                      Precise, qualitative and effective with proven track
                      record across multiple prelims exams of different states
                    </li>
                    <li>Extensive subject wise coverage of questions</li>
                    <li>Goldmine for your success in judiciary exams</li>
                  </ul>
                  <div>
                    <button className="mt-2 font-semibold text-[#333] flex items-center gap-2 rounded-md bg-secondary p-3 shadow-[0px_0px_10px_-2px_rgba(0,0,0,0.25)] hover:text-[#121212] transition-all">
                      Download Free
                      <LuDownloadCloud />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 items-center absolute right-14 top-14">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="absolute left-0 right-0 justify-center bottom-8 flex items-center gap-3">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full bg-[#ccc] ${
              index === selectedIndex ? "bg-secondary" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarouselSlides;
